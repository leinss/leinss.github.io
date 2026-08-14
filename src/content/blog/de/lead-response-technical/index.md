---
title: "Wie ich personalisierte Lead-Antworten mit n8n und Kimi automatisiere"
description: "Ein technischer Teardown des Lead-Response-Workflows: eine zweistufige LLM-Pipeline, die einen eingehenden Lead klassifiziert und dann eine personalisierte Antwort in der richtigen Sprache entwirft."
date: "Jul 4 2026"
tags: ["n8n", "kimi", "ai", "automation", "teardown", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Der Lead-Response-Bot fährt zwei LLM-Durchläufe über eine Kontaktformular-Einsendung: Zuerst klassifiziert Kimi K2 den Lead (Absicht, Passung, Sprache) als JSON, dann nutzt ein zweiter Kimi-Aufruf diese Klassifikation, um eine personalisierte Antwort in der Sprache des Absenders zu entwerfen. n8n übernimmt Formular, Verzweigung und Versand; Code-Nodes validieren die Eingabe und parsen die Klassifikation zwischen den Durchläufen. Klassifizieren-dann-schreiben zu trennen lässt die Antwort gezielt wirken. Das ist der Teardown der [Live-Lead-Response-Demo](https://leinss-consulting.de/de/blog/kommunikation-automatisieren-menschlich-bleiben/).

Eine generische Auto-Antwort ist schlimmer als eine langsame menschliche. Die [Lead-Response-Demo auf meiner Beratungsseite](https://leinss-consulting.de/de/blog/kommunikation-automatisieren-menschlich-bleiben/) liest eine eingehende Nachricht und entwirft eine Antwort, die tatsächlich darauf eingeht. Der Kniff ist, es in zwei Durchläufen zu tun, nicht in einem. Das [Workflow-JSON ist herunterladbar](https://leinss-consulting.de/workflows/blitz-antwort.json).

## Zwei Durchläufe, nicht einer

| Stufe | Node(s) | Was passiert |
| --- | --- | --- |
| Eingang | Webhook → validieren → if | Name, E-Mail, Nachricht, Firma annehmen; unvollständig abweisen |
| Klassifizieren | HTTP → Kimi K2 | Absicht, Passung und Sprache als JSON bewerten |
| Parsen | Code → parsen | Die Klassifikation in ein nutzbares Objekt wandeln |
| Entwerfen | HTTP → Kimi K2 | Eine personalisierte Antwort schreiben, von der Klassifikation gesteuert |
| Zusammenbauen | Code → E-Mail bauen | Betreff und Text in der richtigen Sprache setzen |
| Zurückgeben | Respond | Eingang bestätigen |

## Warum erst klassifizieren, dann schreiben

Man könnte einen Prompt bitten, „lies das und antworte". Es klappt, schlecht: das Modell muss Ton und Absicht raten, während es schreibt. Die Aufgabe zu teilen ist verlässlicher:

1. **Klassifizieren** läuft zuerst mit einem System-Prompt, der es zu einem Lead-Qualifizierungsassistenten macht. Es gibt strukturierte Felder zurück: was der Lead will, wie gut die Passung ist und in welcher Sprache er geschrieben hat.
2. **Entwerfen** läuft danach. Es bekommt die Originalnachricht *und* die Klassifikation, mit einem Persona-System-Prompt, also schreibt es in einer konsistenten Stimme, gezielt auf diesen Lead, und antwortet in dessen Sprache.

Die Klassifikation gibt mir außerdem etwas, worauf ich später routen kann, ein heißer Lead und ein Nur-Gucker können unterschiedlich behandelt werden, ohne die Nachricht erneut zu lesen.

## Wo n8n aufhört und Code anfängt

n8n besitzt den Webhook, die zwei HTTP-Aufrufe und die Antwort. Die zwei Code-Nodes sind die Nähte:

- **Validieren** prüft, dass Name, E-Mail und Nachricht da sind, bevor ein einziges Token ausgegeben wird.
- **Klassifikation parsen** erledigt die unglamouröse, aber essenzielle Arbeit: die ```` ```json ````-Zäune des Modells entfernen, `JSON.parse`, und sicher scheitern, wenn die Form nicht stimmt, damit der Entwurfsschritt immer sauberen strukturierten Input bekommt.
- **E-Mail zusammenbauen** liest das Sprach-Flag aus der Klassifikation und baut Betreff und Text entsprechend.

Dieser Parse-zwischen-Durchläufen-Node ist reines „wo Code anfängt": Zwei Modellaufrufe lassen sich in einer Oberfläche nicht verlässlich verketten, ohne dass etwas echter Code die Übergabe säubert. Es ist die Grenze, auf die ich immer wieder stoße, beschrieben in [meinem n8n-Automatisierungs-Stack](/blog/de/n8n-automation-stack/).

## Warum es auf meinem eigenen Stack läuft

Eingehende Leads sind Geschäftsdaten, und die Antwort geht unter meinem Namen raus. Die Pipeline auf Infrastruktur zu betreiben, die ich kontrolliere, heißt, Nachricht und Klassifikation bleiben bei mir, abgesehen von den Modellaufrufen, die ich zu machen wähle. Das ist die Logik [des selbst gehosteten Stacks, den ich statt SaaS betreibe](/blog/de/self-hosted-stack/). Schnelle, personalisierte Lead-Bearbeitung, für Ihre Pipeline gebaut und übergeben? Das mache ich bei [Leinss Consulting](https://leinss-consulting.de/de/).
