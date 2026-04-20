# fai-memes — OpenClaw Plugin

Generate and send AI memes via the [Fai Meme API](https://thefaiapp.com/api).

Clawdbot can pick from **7 image formats** and post the resulting image URL directly into any chat channel.

---

## Features

- **`generate_meme` agent tool** — Clawdbot calls this automatically when you ask for a meme
- **`/meme` slash command** — Type `/meme <topic>` in any chat channel
- **7 formats**: `standard`, `wide`, `tall`, `square`, `classic`, `minimal`, `bold`
- Works on Discord, Telegram, WhatsApp, iMessage, Slack, and all other OpenClaw channels

---

## Install

```bash
openclaw plugins install ./fai-memes-plugin
# or once published to ClawHub:
openclaw plugins install clawhub:fai-memes
```

---

## Config (optional)

In your OpenClaw config file:

```json
{
  "plugins": {
    "entries": {
      "fai-memes": {
        "enabled": true,
        "config": {
          "apiKey": "your-fai-api-key-if-required",
          "defaultFormat": "standard"
        }
      }
    }
  }
}
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | string | — | Fai API key (if the API requires auth) |
| `defaultFormat` | string | `"standard"` | Default meme format when not specified |

---

## Usage

### Ask Clawdbot naturally
> "Send me a meme about Mondays"  
> "Meme: when the standup runs 45 minutes"  
> "React to this with a meme about spaghetti code"

### Slash command
```
/meme cat knocking things off tables
/meme developer at 3am --format wide
/meme meeting that could have been an email --format classic
```

---

## Meme Formats

| Format | Description |
|--------|-------------|
| `standard` | General-purpose, default |
| `wide` | Landscape/banner layout |
| `tall` | Portrait/story layout |
| `square` | Square crop (great for Instagram) |
| `classic` | Traditional top/bottom text meme |
| `minimal` | Clean, minimal text |
| `bold` | High-impact, large visuals |

---

## Publishing to ClawHub

1. Zip the plugin folder: `tar -czf fai-memes.tgz fai-memes-plugin/`
2. Go to [clawhub.ai/publish-plugin](https://clawhub.ai/publish-plugin)
3. Drag the `.tgz` file onto the upload zone
4. Fill in the metadata form and publish

---

## License

MIT
