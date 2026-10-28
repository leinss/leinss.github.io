---
title: "TobiBoard"
description: "Eine datenschutzfreundliche Android-Tastatur, deren KI-Spracheingabe und Textkorrektur auf dem Gerät selbst laufen, ohne Konto und ohne API-Schlüssel."
date: "Jun 2026"
demoURL: "https://github.com/leinss/TobiBoard/releases/latest"
repoURL: "https://github.com/leinss/TobiBoard"
---

![TobiBoard](/images/projects/TobiBoard/feature.png)

**TobiBoard** ist eine schnelle, private Android-Tastatur, die **komplett auf Ihrem Gerät** läuft: ein Fork von [HeliBoard](https://github.com/Helium314/HeliBoard) mit allem, was HeliBoard offline kann, also Tippen, Wischen, Autokorrektur, Vorschläge und Wörterbücher. Dazu kommen **zwei KI-Helfer, die ebenfalls auf Ihrem Gerät laufen**, und eine Verwaltung für die Zwischenablage.

## Zwei KI-Funktionen, standardmäßig auf dem Gerät

- **Voice-to-Text**: Return lange drücken, auf das Mikrofon tippen, sprechen, und Ihre Worte kommen als Text an. Die Transkription läuft lokal auf [Parakeet TDT 0.6B](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3) über [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) und erkennt Englisch, Deutsch, Spanisch und Französisch automatisch.
- **Text Fix**: groben Text markieren, auf Fix tippen und eine saubere, gut formatierte Nachricht in derselben Sprache zurückbekommen. Läuft lokal auf Qwen 2.5 über [MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference). Gemma steht ebenfalls zur Wahl.

Beide nutzen standardmäßig die Engine auf dem Gerät. Das heißt **kein Konto, kein API-Schlüssel, kein Abo, keine Telemetrie und kein Backend**, und Diktieren funktioniert auch im Flugmodus. Ehrlicherweise hat das einen Preis. Jedes Modell ist ein einmaliger Download von ein paar hundert Megabyte, und die Arbeit macht das Handy, also ist es langsamer als ein Rechenzentrum.

Wenn Sie lieber ein Cloud-Modell nutzen, bleibt das eine Option, die Sie selbst einschalten: Tragen Sie Ihren eigenen Schlüssel für [OpenRouter](https://openrouter.ai/) oder [PayPerQ](https://ppq.ai/) ein, dann laufen die KI-Funktionen stattdessen dorthin. Anfragen über OpenRouter laufen standardmäßig mit **Zero Data Retention**. Auf einem Server von mir landet so oder so nichts, denn es gibt keinen.

Was Sie tippen, verlässt nie das Gerät. Ein API-Schlüssel, den Sie doch eintragen, wird mit dem Android Keystore verschlüsselt, und das Mikrofon ist nur in Gebrauch, während Sie gerade diktieren. → [Datenschutzerklärung](/de/projects/tobiboard/privacy)

## Installieren

- **APK**: Download über [GitHub Releases](https://github.com/leinss/TobiBoard/releases/latest).
- **Automatische Updates**: [Obtainium](https://github.com/ImranR98/Obtainium) installieren und auf dieses GitHub-Repo richten. Es verfolgt neue Releases für Sie, ganz ohne Store.
- **F-Droid (selbst gehostet)**: das Repo unter [leinss.xyz/TobiBoard/repo](https://leinss.xyz/TobiBoard/repo) hinzufügen und signierte Updates über Ihren F-Droid-Client bekommen.

TobiBoard lässt sich neben HeliBoard installieren, Sie können also beide behalten.

![Screenshot](/images/projects/TobiBoard/screenshot.png)

## Open Source

GPL-3.0, ein Fork von HeliBoard aus der Linie AOSP / OpenBoard. Das Tippen und beide KI-Funktionen laufen auf dem Gerät. Das Einzige, was die Cloud erreichen kann, ist ein Anbieter, den Sie selbst mit Ihrem eigenen Schlüssel einschalten. Die mitgelieferten Laufzeitumgebungen für Sprache und LLM sind vorkompilierte Binärdateien, deshalb wird die App hier verteilt und nicht über das Hauptrepository von F-Droid. Quellcode und Bauanleitung: [github.com/leinss/TobiBoard](https://github.com/leinss/TobiBoard).
