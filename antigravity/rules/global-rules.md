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