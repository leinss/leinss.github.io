---
title: "Was ich nutze"
description: "Die Hardware, Werkzeuge und Dienste, mit denen ich meine Apps baue und meine Infrastruktur betreibe."
date: "2026-10-28"
---

Eine Momentaufnahme dessen, womit ich baue, angeregt von [uses.tech](https://uses.tech). Durchgehend bevorzuge ich Dinge, die offline funktionieren, Daten lokal halten und sich aus einer Datei in einem Repository neu aufbauen lassen statt per Klick in einem Dashboard.

Die Liste ist bewusst breit. Ich kenne lieber vier Sprachen und die Infrastruktur darunter als eine Sprache sehr gut. Bei Werkzeugen ist es dasselbe: Ich habe mehrere im Wechsel, statt mich auf eines festzulegen, denn ein Stack, den man nicht verlassen kann, sucht einem irgendwann die Probleme aus.

## Hardware

- **Apple-Silicon-Mac**: der Hauptrechner für die Entwicklung, und auf ihm laufen meine lokalen LLMs.
- **Android-Geräte** zum Testen von [TobiBoard](/de/projects/TobiBoard) und [TobiReader](/de/projects/TobiReader), über `adb` gesteuert, wenn ein Test wiederholbar sein muss.
- **Ein kleines Homelab**, auf dem meine eigenen Dienste laufen. Alles davon ist mit Ansible konfiguriert, nichts von Hand.

## Terminal

Ich lebe im Terminal, und die meisten Werkzeuge dort ersetzen etwas Älteres, das ich leid war.

- **zsh**, mit `eza` für `ls`, `bat` für `cat`, `fd` für `find`, `ripgrep` für `grep`, `delta` für `diff`, `dust` für `du`, `duf` für `df` und `btop` für `htop`.
- **`jq` und `yq`** für alles, was nach JSON oder YAML aussieht, **httpie** für HTTP von Hand.
- **direnv** für die Umgebung je Projekt.
- **chezmoi** für Dotfiles.
- **fnm** für Node-Versionen, wobei eine einzige `.node-version` lokal und CI synchron hält.
- **KI-Coding-Harnesses**, bewusst mehr als einer: **Claude Code** im Alltag, daneben **OpenCode**, **Codex** und was sonst einen Blick wert ist. Sie haben wirklich unterschiedliche Stärken, und das Feld bewegt sich so schnell, dass die Festlegung auf eines eine schlechte Wette ist. Nur wer mehrere betreibt, kann sagen, welches für eine bestimmte Aufgabe tatsächlich besser ist, und nicht nur, an welches man gewöhnt ist.

## Web-Stack

Diese Seite und der größte Teil meiner Webarbeit:

- **Astro** und **MDX** für Seiten, die von Inhalten leben
- **Tailwind CSS** für das Styling
- **TypeScript**, geprüft mit **ESLint**
- **pnpm** für Pakete, **Node 24**
- Deployt auf **GitHub Pages**

## Mobil und Desktop

- **Kotlin** für Android, **Swift** für macOS, **TypeScript**, wo etwas überall laufen soll.
- **Ein selbst gehostetes F-Droid-Repository** plus GitHub Releases, um Android-Builds zu verteilen, damit eine Installation kein Store-Konto braucht.

## KI auf dem Gerät und Werkzeuge dafür

- **Ollama** für lokale Modelle auf dem Desktop, auch für das automatische Taggen in [taggr](/de/projects/taggr).
- **Sprache auf dem Gerät**: Transkription und Sprachausgabe, die auf dem Handy laufen, sodass Audio es nie verlässt. TobiBoard diktiert mit Parakeet TDT 0.6B über sherpa-onnx.
- **LLMs auf dem Gerät**: Qwen 2.5 über MediaPipe treibt die Textkorrektur von TobiBoard an, sodass der Standardweg weder einen Schlüssel noch ein Netz braucht.
- **Cloud-Modelle mit eigenem Schlüssel** als Alternative in meinen Apps, die man selbst einschalten muss. Der Schlüssel bleibt auf dem Gerät des Nutzers, und die Aufrufe gehen an den Anbieter, den *Sie* wählen.

## Infrastruktur und Self-Hosting

Die berufliche Hälfte dieser Liste, und der Teil, den ich in einem Vorstellungsgespräch am härtesten verteidigen würde.

- **Ansible** für alles. Braucht ein Rechner eine Änderung, passiert sie in einer Rolle und wird ausgerollt, nicht in eine Shell getippt.
- **Docker** und **Traefik** für Dienste und Routing.
- **Prometheus, Grafana, Loki und Alertmanager** für Metriken, Logs und Alarmierung, mit **Blackbox** für Prüfungen von außen und **cAdvisor** für Details auf Container-Ebene. Ein Alarm, der nicht auslösen kann, ist schlimmer als gar keiner, deshalb haben die Regeln eigene Unit-Tests, die in der CI laufen.
- **Borg** für Backups, nach einem gestaffelten Zeitplan, und die Wiederherstellung wird tatsächlich geprobt.
- **PostgreSQL** mit Replikation, Failover und Pooling.
- **Selbst gehostete Dienste** für den eigenen Bedarf, vom Code-Hosting über Feeds bis zur Musik, weil ich ein Ding lieber selbst betreibe, als ein Produkt darin zu sein.
- **umami** für datenschutzfreundliche Statistiken ohne Cookies und **Listmonk** für den Newsletter.
