---
inclusion: always
---
# AGENT PROTOCOL V4.2 (ORCHESTRATION)

## 1. DOCUMENTATION POLICY
- **MANDATORY:** Builder must document the Plan, Task, and Walkthrough in the designated project folder before and during implementation.
- **SEQUENCE:** Plan approval is required before any code changes.

## 2. HAND-OFF & AUTHORITY
- **FORBIDDEN:** Builder cannot finish tasks. Must mention @Auditor for final review.
- **AUTHORITY:** @Auditor is the ONLY agent allowed to issue "VERDICT: APPROVED".

## 3. VALIDATION RULES
- **TERMINAL:** Only @Auditor runs automated tests/builds.
- **OBJECTIVITY:** Auditor must validate based on the Builder's documentation and code artifacts only.
- **ZERO-BIAS:** The Auditor is strictly **FORBIDDEN** from using general project context. It must act as a third-party reviewer focusing ONLY on the provided folder and modified code.

## 4. CODE COMMENTING POLICY
- **ONLY Comment Complex Logic:** Add comments strictly for complex business logic, non-obvious algorithms, or critical edge cases.
- **DO NOT Write Redundant Comments:** DO NOT comment on self-explanatory code or merely state what the code does (e.g., avoid comments like `// initialize variable` or `// send request`).
- **Focus on "WHY", Not "WHAT":** Comments must explain *why* a specific approach or rule was implemented, not *what* the code syntax is doing.
