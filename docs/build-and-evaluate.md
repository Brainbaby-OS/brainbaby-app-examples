# Build and evaluate a small AI-generated app

This workflow starts with a frontend task you can verify. It is useful when comparing a no-code AI app builder or checking whether an exported project is a suitable starting point for your idea.

## The brief used for the example

> Build a small responsive community garden checklist demo. Use a warm white background, black text and restrained green accents. Include a clear heading, a short introduction, and six accessible checkboxes for preparing soil, choosing seeds, watering, weeding, labeling beds and harvesting. Include a reset button. Use local component state only, no authentication, external services, photos, email collection or backend. Keep it simple and working on mobile.

This is a demo instruction, not a promise that another generation will produce identical files. The original exported files in this repository are the concrete example to inspect.

## What was verified

The existing Brainbaby QA project was reopened and exercised on October 17, 2026. Its source was exported, installed and built independently. Browser checks at 390px and 1280px covered the six checkboxes, completion count, all-complete state, reset, keyboard interaction and horizontal overflow.

The [provenance file](garden-checklist-provenance.json) identifies the unchanged original files. These checks establish the behavior of this small export. They do not establish fresh-generation quality, performance on a physical phone, complex application security or store readiness.

## Make a brief for your own task

Fill in these fields before submitting a generation:

```text
User: Who will use the app?
Task: What one thing should they finish?
First action: What can I click or change to verify it works?
Inputs: What information is required?
Result: What should be visible after the action?
Persistence: Should it survive a reload? If so, where is it saved?
Access: Who may read or change each record?
Platform: Browser, iOS, Android, or more than one?
Limits: What should stay out of this first version?
```

Prepare the brief in the [Brainbaby web app workflow](https://brainbaby.ai/web-apps?utm_source=github&utm_medium=referral&utm_campaign=app-builder-example&utm_content=evaluation-guide). Filling an idea field is not generation; review the action quote before submitting it.

## Ask for one change at a time

For a local-only experiment, a concrete revision is:

> Add a text field for a temporary checklist title. Reject an empty title and show the title above the tasks. Keep the six task controls and reset behavior working. Do not add an account, backend or external service. Explain which files changed and what I should check.

This is a suggested follow-up to try, not an implemented feature in the checked-in app.

## Add checks when the requirements change

| Requirement | Evidence to obtain |
| --- | --- |
| Save progress | Change a value, reload, and verify the saved value for the same account |
| Multiple accounts | Use two authorized test accounts and confirm each sees only permitted records |
| Server actions | Check a server acknowledgement and the actual saved record, not just a success toast |
| Payments | Verify amount, currency, receipt, entitlement and restoration in the provider's supported test environment |
| Export | Build the downloaded files independently and document required environment variables without publishing their values |
| Native release | Verify signing, permissions, device behavior, privacy information and store submission separately |

Use fictional records and supported test environments while evaluating. A working preview is useful evidence for its visible interaction; it does not establish the behavior of services that have not been connected and checked.

## Choose an allowance for the work

Budget for revisions as well as the first generation. Review [current Brainbaby pricing](https://brainbaby.ai/pricing?return_to=websites) and each action quote. This repository does not predict a finished-app cost or guarantee an app can be completed within a particular allowance.
