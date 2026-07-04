---
title: "Der selbst gehostete Stack, den ich statt SaaS betreibe"
description: "Die Analyse-, Newsletter-, Automatisierungs-, Backend- und lokalen KI-Tools, die ich auf eigener EU-Infrastruktur selbst hoste — und welche gemietete SaaS sie ersetzen."
date: "Jul 4 2026"
tags: ["self-hosting", "privacy", "saas-alternatives", "own-your-stack"]
lang: "de"
---

> **Kurz gesagt:** Ich betreibe meine Analyse, meinen Newsletter, meine Automatisierung, mein Backend und meine lokale KI auf eigener Infrastruktur in der EU: Umami, Listmonk, n8n, Supabase und LM Studio, statt Google Analytics, Mailchimp, Zapier, Firebase und eine Cloud-KI zu mieten. Den Stack zu besitzen heißt: keine Gebühr pro Platz, keine Daten, die die EU verlassen, und nichts, was ich nicht ändern kann. Das kostet vorab mehr Engineering und zahlt sich in Kontrolle aus.

Die meisten Unternehmen laufen auf gemieteter SaaS. Das ist der schnelle Einstieg, und eine Weile lang ist er auch richtig. Aber jedes gemietete Tool ist eine laufende Uhr, eine Kopie Ihrer Daten auf fremden Servern und eine feste Grenze dafür, was Sie überhaupt ändern dürfen. Ab einem gewissen Punkt schlägt Besitzen das Mieten. Das ist der Stack, den ich betreibe.

## Was ich selbst hoste, und was es ersetzt

| Ich betreibe (selbst gehostet) | Statt zu mieten | Warum ich es besitze |
| --- | --- | --- |
| **Umami** | Google Analytics | Besucherdaten bleiben auf meinem Server; kein Tracking durch Dritte, kein Sampling |
| **Listmonk** | Mailchimp | Die Abonnentenliste gehört mir; keine Kosten pro Kontakt |
| **n8n** | Zapier / Make | Unbegrenzte Durchläufe, echter Code wenn ein Workflow der Oberfläche entwächst, Daten verlassen meinen Server nie |
| **Supabase** | Firebase | Reines Postgres, das ich kontrolliere, kein gemieteter proprietärer Datenspeicher |
| **LM Studio** | Cloud-LLM-APIs | Prompts und Dokumente gehen nie an Dritte |

Nichts davon ist Wunschdenken. Die Analyse, die diesen Besuch zählt, und das Newsletter-Formular am Ende dieser Seite laufen beide auf genau diesem selbst gehosteten Setup — Umami und Listmonk, auf eigener Hardware.

## Warum Besitzen das Mieten schlägt

**Kosten sind keine laufende Uhr mehr.** Gemietete SaaS rechnet pro Platz, pro Kontakt, pro Aufgabe, pro Durchlauf ab, Ihre Rechnung wächst also mit Ihrem Erfolg. Selbst gehostet kostet ein weiterer Workflow oder zehntausend weitere Abonnenten praktisch nichts extra. Sie zahlen für den Server, nicht für seine Nutzung.

**Ihre Daten bleiben, wo sie sind.** Analyse, E-Mail-Listen, Kundendaten, die Dokumente, die eine Automatisierung liest — alles bleibt auf Infrastruktur, die ich kontrolliere, in der EU. Unter der DSGVO ist das kein nettes Extra; für jeden, der mit Mandanten- oder Kundendaten arbeitet, ist es der entscheidende Punkt.

**Nichts ist eine Blackbox.** Wenn ein gemietetes Tool nicht kann, was Sie brauchen, stellen Sie einen Feature-Wunsch und warten. Wenn ich brauche, dass n8n etwas tut, das seine Oberfläche nicht hergibt, gehe ich in den Code. Die Schicht zu besitzen heißt: die Grenze ist mein eigenes Können, nicht die Roadmap eines Anbieters.

## „Sollte also jeder selbst hosten?"

Nein, und ich würde jedem misstrauen, der Ja sagt. Wenn Sie klein sind und schnell vorankommen, sind gemietete Tools die richtige Wahl, und ich nutze sie selbst, wo sie ihren Platz verdienen. Selbst-Hosting fängt an, sich zu lohnen, wenn einer dieser Punkte zutrifft:

- Ihre Daten dürfen die EU nicht verlassen: DSGVO, Berufsgeheimnis, regulierte Branche.
- Die Rechnung pro Platz oder pro Durchlauf ist still zur Wachstumssteuer geworden.
- Sie sind an die Grenze dessen gestoßen, was die SaaS Sie ändern lässt.

Die ehrliche Reihenfolge lautet: mit gemieteten Tools starten, dann die tragenden Teile besitzen, sobald sie wichtig werden. Der Haken, und das ist der Teil, der über alles entscheidet, ist, dass sie *gut* zu besitzen kein Wochenende nach Anleitung ist. Es sind Docker, ein Reverse Proxy, Backups, Auth, Monitoring, Updates. Richtig gemacht heißt „selbst gehostet" belastbar und privat. Schlecht gemacht heißt es ein Risiko mit den Daten Ihrer Kunden darauf. Diese Lücke ist Engineering, und genau der Teil, den eine Low-Code-Anleitung weglässt.

## Jede Wahl, im Detail verglichen

Für die tragenden Tools habe ich das direkte Duell gegen die SaaS aufgeschrieben, die sie ersetzen, jeweils aus dem produktiven Betrieb:

- [Umami vs Google Analytics](/blog/de/umami-vs-google-analytics/) — Analyse ohne Cookie-Banner und ohne Sampling
- [Listmonk vs Mailchimp](/blog/de/listmonk-vs-mailchimp/) — die Liste besitzen, statt pro Kontakt zu zahlen
- [Selbst gehostetes Supabase vs Firebase](/blog/de/self-hosted-supabase-vs-firebase/) — eigenes Postgres statt proprietärem NoSQL
- [Postiz vs Buffer](/blog/de/postiz-vs-buffer/) — Social-Planung ohne Abrechnung pro Kanal

## So einen Aufbau für Ihr Unternehmen?

Automatisierung, die Ihnen gehört — auf Ihrer Infrastruktur gebaut, dokumentiert, an Ihr Team übergeben — mache ich für Unternehmen bei [Leinss Consulting](https://leinss-consulting.de/de/). Schnell mit bewährten Tools starten; die Teile besitzen, die zählen. Kein Lock-in, keine gemieteten Blackboxes.
