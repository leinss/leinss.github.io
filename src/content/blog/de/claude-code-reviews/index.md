---
title: "Code Reviews mit Claude AI automatisieren"
description: "Wie ich Claude nutze, um Code-Review-Workflows zu beschleunigen und Probleme schneller zu finden"
date: "Jan 15 2025"
tags: ["claude", "ai-automation", "code-review"]
lang: "de"
---

> **Kurz gesagt:** Ich lasse Claude als automatischen ersten Durchgang über jeden Pull Request laufen: er markiert Logikfehler, Sicherheitslücken, Performance-Anti-Patterns und fehlende Fehlerbehandlung, bevor ein Mensch draufschaut. Die Reviewer verbringen ihre Zeit dann mit Architektur und Business-Logik statt mit Kleinkram. Die KI macht den ersten Durchgang, die Urteile bleiben beim Menschen.

Code Reviews sind wichtig, kosten aber Zeit. So binde ich Claude in den Workflow ein, um sie schneller und gründlicher zu machen.

## Das Problem mit rein manuellen Code Reviews

- **Zeitdruck** führt zu oberflächlichen Reviews.
- **Kognitive Ermüdung** lässt Fehler durchrutschen.
- **Inkonsistente Standards** schleichen sich zwischen Reviewern ein.
- **Context Switching** zwischen PRs ist teuer.

## Was die KI übernimmt vs. was Menschen besser können

| Claude macht den ersten Durchgang | Mensch behält |
|---|---|
| Logikfehler und Edge Cases | Architekturentscheidungen |
| Sicherheitslücken (Injection, XSS, …) | Validierung der Business-Logik |
| Performance-Anti-Patterns | UX-Auswirkungen |
| Inkonsistente Namensgebung | Wissenstransfer im Team |
| Fehlende Fehlerbehandlung | Kontextabhängige Abwägungen |

## Der Workflow

```
PR erstellt → Claude-Analyse → Human Review → Merge
```

1. **Automatischer Trigger**, das Öffnen eines PR startet die Analyse.
2. **Strukturiertes Feedback**, Claude liefert kategorisierte Erkenntnisse nach Schweregrad.
3. **Human Focus**, Reviewer richten ihre Aufmerksamkeit auf die wichtigen Entscheidungen.
4. **Schnellere Iteration**: Autoren beheben das Offensichtliche, bevor ein Mensch draufschaut.

## Worin es gut und worin es schlecht ist

Aus dem Einsatz an meinen eigenen Pull Requests ist die Aufteilung ziemlich stabil.

Gut ist es in dem, was mühsam zu prüfen und mechanisch zu erkennen ist: ein unbehandelter Fehlerpfad, ein Wert, der vor der Null-Prüfung benutzt wird, eine Schleife, die pro Zeile einmal in die Datenbank geht, ein Name, der das Gegenteil dessen sagt, was die Funktion tut. Es liest den ganzen Diff mit gleichbleibender Aufmerksamkeit, und genau dort lässt ein menschlicher Reviewer nach.

Schlecht ist es darin, zu wissen, was zählt. Es meldet ein echtes, aber belangloses Problem mit demselben Ernst wie ein echtes und ernstes, und es beschreibt selbstsicher Fehler, die der umgebende Code längst ausschließt. Deshalb muss die Ausgabe ein Kommentar am PR sein und kein Tor: eine Liste von Dingen zum Nachsehen, von denen Sie einige verwerfen werden.

Der Fehlermodus, auf den zu achten ist: ein Review, das gründlich wirkt, weil es lang ist. Erkenntnisse sind billig zu erzeugen. Verlangen Sie zu jeder die Eingabe, die den Fehler auslösen würde, und die Liste wird kürzer und nützlicher.

## Erste Schritte

Viel braucht es nicht:

1. **Wo es läuft**, ein CI-Schritt bei `pull_request` (z. B. eine GitHub Action) oder ein lokaler Durchgang mit Claude Code, bevor Sie das Review anfordern.
2. **Den Diff übergeben**: den PR-Diff plus eine kurze Checkliste: Sicherheit, Fehlerbehandlung, Namensgebung, Edge Cases.
3. **Strukturierte Ausgabe verlangen**: kategorisierte Erkenntnisse mit Schweregrad, damit Autoren in Sekunden triagieren können.
4. **Als Kommentar posten**: ein Bot-Kommentar am PR, klar als automatischer erster Durchgang gekennzeichnet.

Der Schlüssel ist, KI als **ersten Durchgang** zu behandeln, nicht als Ersatz. Menschliches Urteilsvermögen bleibt für alles Kontextabhängige essenziell.

---

*Welche Erfahrungen haben Sie mit KI-gestützten Code Reviews gemacht? Ich würde gerne hören, wie andere das angehen.*
