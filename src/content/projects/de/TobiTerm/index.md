---
title: "TobiTerm"
description: "Ein Android-Terminal, um Coding-Agenten auf entfernten Rechnern zu steuern: eine mosh-Sitzung, die den Weg zum Zug übersteht, und auf dem Handy die Teile, die ein Arbeitsablauf am Laptop voraussetzt."
date: "2026-08-02"
---

**TobiTerm** ist ein Terminal für die Hälfte der Arbeit, die nicht am Schreibtisch passiert. Sie starten einen Coding-Agenten auf einem Rechner zu Hause oder in der Cloud, packen den Laptop weg und arbeiten vom Handy aus weiter: Sie genehmigen, was er fragt, lesen, was er geändert hat, und schicken ihm den Screenshot, der den Bug erklärt.

Es ist ein Fork von [Termux](https://github.com/termux/termux-app), also kommt das ganze Linux-Userland mit: ein Paketmanager, `ssh`, `git`, `tmux` und alles andere, was sich installieren lässt. Der Fork fügt alles hinzu, was ein Handy braucht und ein Laptop schon hatte.

## Sitzungen, die die Fahrt überstehen

Im Zug brechen Verbindungen ab. **mosh** trägt eine Sitzung über einen Netzwechsel, ein verlorenes Signal und ein schlafendes Handy hinweg und macht dort weiter, wo sie war, ohne neue Verbindung und ohne verlorenen Scrollback. Gespeicherte Hosts öffnen eine Sitzung mit einem Tippen, in dem Userland, das Sie dafür gewählt haben. Eine Sitzung, die abbricht, sagt, warum, statt sich stillschweigend zu schließen.

## Einem Agenten antworten, ohne die Sitzung zu öffnen

Ein Agent, der anhält und um Erlaubnis fragt, ist ein Programm, das auf seine Eingabe wartet. Eine Benachrichtigung bringt die Frage auf den Sperrbildschirm, und ihre Buttons tippen die Antwort direkt zurück in diese Sitzung: kein Daemon auf dem Host, keine zweite Verbindung, und es funktioniert über mosh. Auf einem gesperrten Handy steht die Authentifizierung von Android selbst vor dem Button.

## Lesen, was er getan hat

- **Diff-Ansicht**: Unified Diffs mit Farbe pro Zeile, einklappbaren Hunks und Hervorhebung auf Wortebene, aus einer Auswahl oder aus einem Befehl, der in der Sitzung läuft. Die Farben werden aus der Palette des Terminals gemischt und über die Helligkeit auseinandergehalten, sodass die Spalte mit `+`/`−` und die Helligkeit die Bedeutung tragen, bevor der Farbton es tut.
- **Vorschau für Dev-Server**: die Adresse erkennen, die ein Dev-Server ausgegeben hat, und sie auf dem Handy öffnen. Läuft der Server auf dem anderen Rechner, wird vorher die Portweiterleitung geöffnet.
- **Übersicht der Agentennutzung**: was die Agenten auf diesem Host ausgegeben haben, gelesen aus ihren eigenen Aufzeichnungen. Die Zahlen werden auf der Gegenseite zusammengefasst, und kein Nachrichtentext verlässt den Rechner.
- **Seitenleiste, die den Multiplexer kennt**: die tmux-Fenster und -Panes der Sitzung im Vordergrund, umschaltbar per Tippen.

## Für eine Hand gebaut

- **Geteilte Ansicht**: zwei Sitzungen nebeneinander. Ist der Bildschirm für beide zu schmal, wird daraus eine.
- **Diktat**: Spracherkennung auf dem Gerät, wo die Plattform sie anbietet, mit einer Einstellung, die den Weg über das Netz rundweg verweigert, statt ihn still zu nutzen.
- **Bild anhängen**: einen Screenshot auswählen, und er landet in der Sitzung. Liest der Agent auf dem entfernten Rechner, wird das Bild dorthin kopiert.
- **Snippets und Profile**: die Befehle, die Sie immer wieder tippen, und das Userland, in dem jeder davon laufen soll.
- **Eine Zustandsanzeige**: Android beendet Hintergrundprozesse nach Budget. Diese Anzeige sagt, wann das passiert ist, und liefert die Abhilfe zum Kopieren.

## Auf dem Gerät, nicht auf einem Server

Es gibt keinen TobiTerm-Dienst. Schlüssel, Hosts und Snippets sind Dateien in Ihrem eigenen Userland, von Hand bearbeitbar, und die App spricht mit nichts außer den Rechnern, auf die Sie sie richten. Eine optionale Sperre setzt eine biometrische Prüfung vor die App. Die Passphrase eines SSH-Schlüssels kann im Android Keystore liegen, damit der Schlüssel auf dem Speicher nicht unverschlüsselt liegen muss.

Derzeit im internen Test.
