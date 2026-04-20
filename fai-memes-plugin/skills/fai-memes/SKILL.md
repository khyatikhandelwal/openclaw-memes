# Fai Meme Generator Skill

## When to use
Use the `generate_meme` tool whenever the user:
- Asks you to "send a meme", "react with a meme", or "share a funny image"
- Uses phrases like "meme this", "meme about X", "send me a meme on Y"
- Asks for a humorous image response to a topic
- Types `/meme <topic>` (handled by the slash command automatically)

## How to use

Call `generate_meme` with:
- **topic** (required): A descriptive phrase for the meme content. Be specific and creative — the more vivid the description, the better the meme. Examples:
  - "developer debugging code at 3am and it finally works"
  - "when the meeting could have been an email"
  - "AI assistant confidently giving wrong answers"
- **format** (optional): One of the 7 image layouts below. Choose based on context:

| Format | Best for |
|--------|----------|
| `standard` | General use, default choice |
| `wide` | Landscape banners, Twitter-style |
| `tall` | Portrait/story format, Instagram-style |
| `square` | Instagram posts, profile shares |
| `classic` | Traditional top-text/bottom-text meme layout |
| `minimal` | Clean, text-light, modern look |
| `bold` | High-impact visuals, large text |

## Posting the meme
After calling `generate_meme`, the tool returns a URL. Send that URL directly in the chat — most platforms (Discord, Telegram, WhatsApp, etc.) will auto-embed the image.

Example response after getting the URL:
> Here's your meme! 🎉 [url]

Or simply post the URL on its own and let the platform render it.

## Choosing a format
- Default to `standard` unless the user specifies or context suggests otherwise
- If the user says "wide meme", "tall meme", etc., use the matching format
- For humorous reaction memes in group chats, `classic` or `bold` work well
- For polished or aesthetic shares, try `minimal` or `square`

## Error handling
If the tool returns an error message instead of a URL, apologize briefly and offer to try again with a different topic or format.

## If multiple memes are returned
- Carefully review all options
- Select the single funniest and most relevant meme
- Prefer:
  - Clear visuals
  - Strong punchline
  - Context match to user's request
- Post ONLY that one URL (do not list all options)
