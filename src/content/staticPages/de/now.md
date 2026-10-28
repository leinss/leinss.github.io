---
title: "Jetzt"
description: "Woran ich gerade arbeite."
date: "2026-08-26"
---

Zwei Dinge haben gerade meine Aufmerksamkeit: die Infrastruktur unter einem Blockchain-Protokoll und eine Reihe datenschutzfreundlicher Apps, die auf Ihrem eigenen Gerät laufen.

## Der Hauptberuf

Ich bin Senior Backend Engineer bei [Gnosis](https://www.gnosis.io) und arbeite an [Circles](https://aboutcircles.com). Ich verantworte die Backend-Dienste und die gesamte Plattform darunter, vom Code der Dienste über das Deployment bis zur Überwachung: sechs Hosts mit über 1,5 Millionen Anfragen pro Tag, sieben öffentliche Dienste bei 99,99 % Verfügbarkeit.

Das meiste, was ich dort gebaut habe, fällt in drei Bereiche. Vier Backend-Dienste, geschrieben ab dem ersten Commit, in TypeScript auf PostgreSQL. Der größte Teil des Protokoll-Indexers, eines C#-Plugins im Execution Client, dessen Abfrageschicht ich neu gebaut habe: Die p95-Antwortzeiten sanken je nach Aufruf um das 5- bis 141-Fache.

Und die Plattform selbst. Sie ist von einer verwalteten Cloud auf Bare Metal umgezogen, und achtunddreißig Ansible-Rollen haben Terraform und Kubernetes ersetzt. Diese Rollen deployen Blockchain-Nodes und PostgreSQL mit automatischem Failover, Replikation und Pooling, Host für Host und ohne Ausfallzeit. Die monatlichen Kosten sind um zwei Drittel gefallen, und eine gemergte Änderung ist jetzt in 10 bis 20 Minuten in Produktion.

Observability ist mir wohl wichtiger, als es normal ist. Zweistufige Health Checks nehmen einen fehlerhaften Node innerhalb von 90 Sekunden aus dem DNS, und weil ein Jahr an Metriken vorliegt, ist eine Regression eine Frage mit einer Antwort und kein Streit.

## Die Apps

Daneben baue ich **datenschutzfreundliche Apps**: Werkzeuge, die auf Ihrem eigenen Gerät laufen, ohne Konto und ohne Backend auskommen und die Cloud nur erreichen, wenn *Sie* sich entscheiden, Ihren eigenen KI-Schlüssel mitzubringen. Keine Telemetrie, keine Datensammlung, kein Lock-in.

Die meiste Zeit davon geht in [TobiBoard](/de/projects/TobiBoard) und [TobiReader](/de/projects/TobiReader). TobiBoard ist eine Android-Tastatur, deren KI-Spracheingabe und Textkorrektur auf dem Handy selbst laufen, ohne Konto und ohne API-Schlüssel. TobiReader ist ein RSS-Reader, der lokal arbeitet, mit Vorlesen auf dem Gerät und optionalen KI-Zusammenfassungen. TobiBoard verteile ich über mein eigenes [F-Droid-Repository](https://leinss.xyz/TobiBoard/repo).

Darum herum gibt es ein kleines Portfolio: einen Bildschirmrekorder für mehrere Plattformen, Spracheingabe und Werkzeuge für die Menüleiste unter macOS und ein paar Nebenprojekte mit KI-Unterstützung. Die vollständige Liste steht auf der [Projektseite](/de/projects).

Was all das verbindet: Ich will sehen, wie weit nützliche Software mit KI kommt, wenn die Daten der Nutzer auf deren eigener Hardware bleiben. In der Praxis sind das zwei Muster. Modelle laufen lokal, wo immer das machbar ist. Bei TobiBoard gilt das inzwischen für die Spracherkennung und für das LLM der Textkorrektur. Für den Rest gilt der eigene Schlüssel: Alles, was in die Cloud geht, nutzt *Ihren* API-Schlüssel und Ihren Endpunkt, nie meinen.

## Und etwas Beratung

Außerdem übernehme ich Aufträge über [Leinss Consulting](https://consulting.leinss.xyz) und helfe Dienstleistungsunternehmen, generative KI einzusetzen. Derzeit sind das ein Online-Shop mit einer Backoffice-App für die Produktverwaltung sowie Disposition und Tourenplanung für einen Brennstoffhändler.

Ich lebe in Deutschland und ziehe nach Asien um. Das hier ist eine [Now-Seite](https://nownownow.com/about), zuletzt aktualisiert im August 2026.
