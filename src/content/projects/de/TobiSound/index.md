---
title: "TobiSound"
description: "Ein nativer Musikplayer für Android, für Ihre eigenen Medienserver und lokalen Dateien: lückenlose Wiedergabe, Offline-Downloads, Chromecast, Android Auto und TV, ohne Konto und ohne Telemetrie."
date: "2026-07-16"
---

![TobiSound](/images/projects/TobiSound/feature.png)

**TobiSound** ist ein nativer Musikplayer für Android, gemacht für die Bibliotheken, die **Sie** schon besitzen. Richten Sie ihn auf Ihren selbst gehosteten **Subsonic/Navidrome**- oder **Jellyfin**-Server, oder spielen Sie Musik direkt vom Gerät ab, und durchsuchen Sie alles als eine einzige Bibliothek. Es gibt **kein Konto, keinen TobiSound-Server, kein Tracking und keine Werbung**. Die App spricht nur mit den Servern, die Sie selbst einrichten.

## Funktionen

- **Mehrere Backends, eine Bibliothek**: Subsonic/Navidrome, Jellyfin und lokale Dateien verbinden und einen gemeinsamen Katalog durchsuchen, während die Wiedergabe immer über den Server läuft, zu dem der jeweilige Titel gehört.
- **Lückenlose Wiedergabe**: keine Stille zwischen den Titeln bei Live-Alben und DJ-Mixen.
- **Offline-Downloads**: Alben und Playlists auf dem Gerät behalten und ohne Verbindung hören.
- **Chromecast**: auf Cast-Geräte im lokalen Netz streamen.
- **Android Auto**: die Bibliothek im Auto durchsuchen und steuern.
- **Android TV**: eine eigene Oberfläche für den großen Bildschirm.
- **Scrobbling**: optionaler Hörverlauf an **ListenBrainz** und/oder **Last.fm**, nur wenn Sie es einschalten und Ihre eigenen Tokens eintragen.
- **Synchronisierte Songtexte**: zeitgenaue Songtexte von **LRCLIB** und aus eingebetteten Tags.
- **Sleep-Timer**: nach einer eingestellten Zeit ausblenden und stoppen.
- **Widget für den Startbildschirm**: die Wiedergabe steuern, ohne die App zu öffnen.

Ihre Zugangsdaten für die Server bleiben **verschlüsselt auf Ihrem Gerät**, die App sammelt nichts, und jede Netzwerkverbindung haben Sie selbst eingerichtet.
→ [Datenschutzerklärung](/de/projects/tobisound/privacy)

## Für Ihre eigene Musik gebaut

TobiSound ist mit Kotlin, Jetpack Compose und media3 gebaut. Eine Schicht für die Anbieter lässt eine App mit mehreren Backends sprechen, hinter einer einzigen Bibliothek, die weiß, was jedes Backend kann. Gedacht ist der Player für Leute, die ihre Musik selbst hosten und einen schnellen, modernen und privaten Player wollen, der nie nach Hause telefoniert.
