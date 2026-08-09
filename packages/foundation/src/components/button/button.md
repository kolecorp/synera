# Button

## Variants
- `.btn--primary` — main call-to-action
- `.btn--secondary` — outlined, lower emphasis

## States
- `:hover` — handled in CSS
- `:disabled` — handled in CSS via native `disabled` attribute

## Notes
Stateless — no `button.ts` file. Behavior (if any, e.g. loading spinner swap)
is left to the consumer since it's app-specific, not a foundation concern.