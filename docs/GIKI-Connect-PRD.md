# GIKI Connect — Product Requirements Document (PRD)

**Version:** 2.2  
**Date:** June 24, 2026  
**Authors:** Saadia Asghar, Fatima 
**Institution:** GIK Institute of Engineering Sciences and Technology (GIKI), Topi  
**Status:** Draft — full scope with phased rollout  
**Tagline:** *The mini Facebook + Reddit of GIKI — campus-only, moment by moment, username-first.*

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Concept](#2-product-vision--concept)
3. [Naming](#3-naming)
4. [Problem Statement](#4-problem-statement)
5. [Goals, Metrics & North Star](#5-goals-metrics--north-star)
6. [User Personas](#6-user-personas)
7. [Phased Rollout Strategy (Slow Scale)](#7-phased-rollout-strategy-slow-scale)
8. [Complete Feature Registry](#8-complete-feature-registry)
9. [Campus Map — "GIK Map" (Deep Dive)](#9-campus-map--gik-map-deep-dive)
10. [Publishing System — Admin + User + Society](#10-publishing-system--admin--user--society)
11. [Community Feed — Mini Facebook + Mini Reddit](#11-community-feed--mini-facebook--mini-reddit)
12. [Viral Marketing & Story Sharing Loop](#12-viral-marketing--story-sharing-loop)
13. [Notifications — How They Work](#13-notifications--how-they-work)
14. [Design & Theme](#14-design--theme)
15. [Technical Architecture](#15-technical-architecture)
16. [Database Schema (Complete)](#16-database-schema-complete)
17. [API & Integration Map](#17-api--integration-map)
18. [Feature Traceability Matrix](#18-feature-traceability-matrix)
19. [User Flows](#19-user-flows)
20. [Work Division — Saadia & Fatima](#20-work-division--saadia--fatima)
21. [Beta Program](#21-beta-program)
22. [Pre-Development Checklist](#22-pre-development-checklist)
23. [User Stories (All Phases)](#23-user-stories-all-phases)
24. [Non-Functional Requirements](#24-non-functional-requirements)
25. [Risks & Mitigations](#25-risks--mitigations)
26. [Legal, Privacy & Campus Policy](#26-legal-privacy--campus-policy)
27. [Privacy & Username-Only Profiles](#27-privacy--username-only-profiles)
28. [In-App Communication Policy](#28-in-app-communication-policy)
29. [Comment Moderation System](#29-comment-moderation-system)
30. [Appendices](#30-appendices)
31. [Immediate Next Steps](#31-immediate-next-steps)

---

## 1. Executive Summary

**GIKI Connect** is a verified, campus-only social platform for GIKI's residential community (`@giki.edu.pk`). It combines:

| Pillar | What it does | Analogy |
|--------|--------------|---------|
| **Connect** | Find people by hobbies + recommendations | LinkedIn meets Tinder-for-friends |
| **Events** | Societies & admin publish; students RSVP | Eventbrite for campus |
| **Meetups** | Small capped hangouts with group chat | Meetup.com micro-groups |
| **Campus Map** | Pin moments to real GIKI locations | Snapchat Map × campus nostalgia |
| **Community Feed** | Posts, likes, tags, discussions | Mini Facebook + Mini Reddit |
| **Share Loop** | Export to Instagram/Snapchat stories | Organic marketing engine |

**Core novelty:** Only active GIKI community members remain. Graduates are auto-removed. The platform is a **living campus graph**, not a permanent alumni network.

**Privacy novelty:** Students interact by **username only** — no real names, batch, or year shown publicly. This lowers the social barrier between seniors and juniors. All coordination stays **inside the app** (group chats); no WhatsApp numbers or external contact leaks.

**Safety novelty:** Public community comments require **admin approval** before they go live — no open spam or toxic threads.

**Build philosophy:** Ship core value first (auth, events, meetups, people). Add map + social feed in Beta. Scale features slowly with real user feedback.

**Team split (v2.1):** **Saadia** owns backend foundation (repo, schema, APIs, auth, infra). **Fatima** owns UI/UX (Figma, frontend, components, polish).

---

## 2. Product Vision & Concept

### 2.1 One-Sentence Vision

> Every GIKI student finds their people, their events, and their place on campus — and shares those moments back to grow the community.

### 2.2 The Three Social Layers

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 3: VIRAL (outside campus)                            │
│  Instagram Story / Snapchat → QR → new signups              │
├─────────────────────────────────────────────────────────────┤
│  LAYER 2: CAMPUS SOCIAL (inside app)                        │
│  Feed posts · Map moments · Tags · Likes · Comments         │
├─────────────────────────────────────────────────────────────┤
│  LAYER 1: UTILITY (why they stay)                           │
│  Events · Meetups · Recommendations · Chat · Notifications  │
└─────────────────────────────────────────────────────────────┘
```

Students come for **utility** (events, meetups, friends). They stay for **social** (feed, map). They grow the app through **viral sharing**.

### 2.3 What "Mini Facebook" Means Here

| Facebook feature | GIKI Connect equivalent | Phase |
|------------------|-------------------------|-------|
| News Feed | Home feed + Community tab | Beta |
| Profile | Username + hobbies (batch hidden publicly) | Alpha |
| Events | Society + admin events | Alpha |
| Groups | Meetups with in-app group chat only | Alpha |
| Photo posts | Moments + map pins | Beta |
| Tag friends | @mention in posts/map moments | Beta |
| Share to story | Branded story card export | Beta |
| Pages | Verified society pages | Alpha |

### 2.4 What "Mini Reddit" Means Here

| Reddit feature | GIKI Connect equivalent | Phase |
|----------------|-------------------------|-------|
| Subreddits | Society channels / topic tags | Beta |
| Upvotes | Likes on posts | Beta |
| Posts + comments | Community feed threads | Beta |
| Campus discussion | Location threads on map pins | Gamma |
| Moderation | Admin queue + DSA workflow | Alpha |

**Key difference from Reddit/Facebook:** Everything is GIKI-verified, graduation-aware, and location-aware on campus.

---

## 3. Naming

### Do NOT use "Meta" (trademark — Meta Platforms)

**Recommended:** **GIKI Connect** (official) · nickname **"Connect"** on campus

| Alternative | Tagline |
|-------------|---------|
| Nest | "Your GIKI nest" |
| GIKCircle | #GIKCircle |
| Topi | Named after campus town |

**Map feature name:** **GIK Map** (sub-brand inside the app)

---

## 4. Problem Statement

GIKI is fully residential. Students live together but remain disconnected:

1. Hobby-matching is accidental (WhatsApp groups, chance encounters).
2. Society events are fragmented (posters, group chats, word of mouth).
3. No safe way to spin up small hangouts with capacity limits.
4. Campus memories are scattered across personal Instagram/Snapchat — not tied to place or community.
5. Generic social apps include alumni and outsiders; no **GIKI-only trust layer**.
6. DSA/admin announcements lack a single official + social channel students actually open.
7. Seniors hesitate to reach juniors (and vice versa) when real identity and batch are visible.
8. Coordination leaks to WhatsApp — no audit trail, numbers shared, groups fragment.

---

## 5. Goals, Metrics & North Star

### 5.1 Goals

| # | Goal |
|---|------|
| G1 | Cross-batch friendships via interest matching |
| G2 | Single source of truth for society + admin events |
| G3 | Student-created micro-meetups with safe caps |
| G4 | Campus map as living memory of GIKI life |
| G5 | Organic growth via story sharing |
| G6 | Graduation-aware user base (no alumni clutter) |
| G7 | Username-only public identity so cross-year connections feel safe |
| G8 | 100% meetup coordination inside app (zero phone number exposure) |
| G9 | Safe community via admin-approved public comments |

### 5.2 North Star Metric

**Weekly Connected Moments** = meetups completed + event RSVPs attended + map moments posted

### 5.3 Success Metrics by Phase

| Phase | Timeline | Key metrics |
|-------|----------|-------------|
| **Alpha** | Week 8 | 30 beta users, 10 meetups, 5 society events |
| **Beta** | Week 14 | 200 users, 50 map moments, 20% share rate |
| **GA** | Week 18 | 40% campus registration, 25% WAU |
| **6 months** | Month 6 | 500+ weekly connected moments |

---

## 6. User Personas

| Persona | Batch/Role | Needs | Primary features |
|---------|------------|-------|------------------|
| **Ali — First-year** | Batch 35, Y1 | Find friends, discover societies | Onboarding, recommendations, events |
| **Sara — Society EC** | Batch 33, Y3 | Promote events, grow society | Society page, event publish, analytics |
| **Omar — Senior** | Batch 32, Y4 | Quick hangouts, low noise | Meetups, notifications |
| **Dr. Khan — Faculty** | Resident | Official info, optional social | Admin read, announcements |
| **Hira — Masters** | MS Y1 | Cross-cohort matching | Discover, meetups |
| **DSA Admin** | Staff | Moderation, official posts | Admin dashboard, publish |
| **Beta Ambassador** | Any | Test features, feedback | Beta flag, feedback form |

---

## 7. Phased Rollout Strategy (Slow Scale)

### 7.1 Philosophy

> **"Core first, creativity second, scale third."**

Do not build everything at once. Each phase has a clear gate before moving forward.

### 7.2 Phase Overview

```
PHASE 0 — PLANNING (Weeks 1–2)
  PRD sign-off · Figma · Repo · Supabase · Auth spike

PHASE 1 — ALPHA MVP (Weeks 3–8)          ← SHIP THIS FIRST
  Auth · Username · Onboarding · Events · Meetups · In-app group chat
  Recommendations (hobbies only, no batch shown) · Admin publish
  Beta: 30 users (Batch 34)

PHASE 2 — BETA SOCIAL (Weeks 9–14)      ← MAP + FEED + SHARING
  GIK Map · User posts · Tags · Likes · Story export
  Society channels · Community feed
  Beta: 200 users (all batches)

PHASE 3 — GAMMA GROWTH (Weeks 15–20)
  Points/gamification · DMs · Search · Calendar
  Push notifications · QR check-in
  GA launch

PHASE 4 — DELTA (Month 6+)
  Mobile app · ML recommendations · Alumni read-only mode
```

### 7.3 Phase Gates (Do Not Skip)

| Gate | Criteria to proceed |
|------|---------------------|
| Alpha → Beta | 30 active users, 0 critical bugs, DSA approval letter |
| Beta → Gamma | 200 users, map has 50+ pins, share rate > 10% |
| Gamma → GA | Moderation queue < 24h response, 99% uptime week |

### 7.4 What Ships When (Summary)

| Feature area | Alpha | Beta | Gamma |
|--------------|-------|------|-------|
| GIKI email auth | ✅ | | |
| Onboarding + MCQs | ✅ | | |
| Society events | ✅ | | |
| Admin announcements | ✅ | | |
| Student meetups + chat | ✅ | | |
| People recommendations | ✅ | | |
| Graduation removal | ✅ | | |
| **Username-only public profile** | ✅ | | |
| **In-app group chat (no WhatsApp)** | ✅ | | |
| **Admin-approved community comments** | | ✅ | |
| **GIK Map** | | ✅ | |
| **User posts / moments** | | ✅ | |
| **Tag friends** | | ✅ | |
| **Story share export** | | ✅ | |
| Community feed (Reddit-style) | | ✅ | |
| Likes + comments | | ✅ | |
| Society channels | | ✅ | |
| Points / gamification | | | ✅ |
| Direct messages | | | ✅ |
| Push notifications | | | ✅ |
| Search | | | ✅ |

---

## 8. Complete Feature Registry

Every feature has a unique ID for tracking. Format: `[AREA][NUMBER]`

### 8.1 Authentication & Identity — `A`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| A1 | GIKI email signup (`@giki.edu.pk`) | Alpha | P0 |
| A2 | OTP / magic link verification | Alpha | P0 |
| A3 | Profile (private): real name, batch, year, dept, hostel — stored, not shown publicly | Alpha | P0 |
| A4 | Profile photo upload (optional avatar) | Alpha | P1 |
| A5 | Roles: student, masters, faculty, society_admin, admin | Alpha | P0 |
| A6 | Graduation auto-removal | Alpha | P0 |
| A7 | Annual re-verification (optional) | Gamma | P2 |
| A8 | Report & block users | Alpha | P0 |
| A9 | Beta user flag (`is_beta_tester`) | Alpha | P1 |
| A10 | **Public username** — only identifier shown to other students | Alpha | P0 |
| A11 | Username uniqueness + validation (3–20 chars, alphanumeric + underscore) | Alpha | P0 |
| A12 | **No public exposure** of email, phone, batch, year, or real name | Alpha | P0 |
| A13 | "Reveal identity" opt-in (Gamma) — mutual consent to show real name | Gamma | P3 |

### 8.2 Onboarding — `O`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| O1 | Hobby multi-select (curated + custom) | Alpha | P0 |
| O2 | Past GIKI events attended | Alpha | P1 |
| O3 | Solo-time MCQs | Alpha | P0 |
| O4 | Group size preference | Alpha | P0 |
| O5 | Pre-GIKI hobbies | Alpha | P0 |
| O6 | Personality / vibe MCQs (8–12) | Alpha | P0 |
| O7 | Onboarding progress bar | Alpha | P1 |
| O8 | Edit interests anytime | Alpha | P1 |

### 8.3 Recommendations — `R`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| R1 | People recommendations | Alpha | P0 |
| R2 | Event recommendations | Alpha | P0 |
| R3 | "Why recommended" label (hobbies only — never batch/year) | Alpha | P1 |
| R4 | Mutual interest badges | Alpha | P1 |
| R5 | Hostel proximity boost (internal only — not displayed) | Beta | P2 |
| R6 | Cold-start fallback | Alpha | P0 |
| R7 | Map moment recommendations ("moments near you") | Beta | P1 |

### 8.4 Official Events — `E`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| E1 | Verified society pages | Alpha | P0 |
| E2 | Society event create (title, cover, time, venue, tags) | Alpha | P0 |
| E3 | Admin / DSA official events | Alpha | P0 |
| E4 | Event feed (chronological + For You) | Alpha | P0 |
| E5 | RSVP / Interested | Alpha | P0 |
| E6 | Event reminders (in-app) | Alpha | P1 |
| E7 | Calendar view | Gamma | P2 |
| E8 | Society follow | Beta | P1 |
| E9 | Link event to map pin | Beta | P1 |

### 8.5 Student Meetups — `M`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| M1 | Create meetup | Alpha | P0 |
| M2 | Category tags | Alpha | P0 |
| M3 | Max capacity + auto-lock when full | Alpha | P0 |
| M4 | Join / Leave | Alpha | P0 |
| M5 | Status: open → full → completed → cancelled | Alpha | P0 |
| M6 | Creator: kick, cancel, edit | Alpha | P1 |
| M7 | Venue (preset locations + custom) | Alpha | P0 |
| M8 | Recurring meetup | Gamma | P2 |
| M9 | Waitlist when full | Gamma | P2 |
| M10 | Post-meetup "share moment" prompt → map | Beta | P1 |

### 8.6 Chat — `C`

**Policy:** All student coordination happens **inside the app**. No phone numbers, WhatsApp links, or external contact fields anywhere in the product.

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| C1 | **Meetup group chat** (real-time) — primary chat | Alpha | P0 |
| C2 | **Event group chat** (RSVP members only) | Alpha | P1 |
| C3 | Direct messages (1:1) — username only, no number exchange | Gamma | P2 |
| C4 | Message reporting | Alpha | P0 |
| C5 | Typing indicators | Gamma | P3 |
| C6 | **Block sharing phone numbers / URLs** in chat (auto-filter + warn) | Alpha | P1 |
| C7 | Chat history stored in app (audit trail for moderation) | Alpha | P0 |
| C8 | System message on join: "Keep chat here — don't share personal numbers" | Alpha | P1 |
| C9 | Society event group chat (optional, society admin) | Beta | P2 |

### 8.7 Campus Map (GIK Map) — `MAP`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| MAP1 | Interactive GIKI campus map (illustrated or satellite overlay) | Beta | P0 |
| MAP2 | Predefined campus locations (NAB, hostels, sports complex, mosque, cafeteria, etc.) | Beta | P0 |
| MAP3 | Drop a moment pin at a location | Beta | P0 |
| MAP4 | Moment = photo + caption + optional tags | Beta | P0 |
| MAP5 | Tag people in moment (`@username`) | Beta | P0 |
| MAP6 | Tag linked event or meetup | Beta | P1 |
| MAP7 | Like moments | Beta | P0 |
| MAP8 | Comment on moments — **admin-approved** (same queue as P5) | Beta | P1 |
| MAP9 | "Moments at this place" location detail view | Beta | P0 |
| MAP10 | Moment expiry (optional: pins fade after 7/30 days — "temporary map") | Beta | P1 |
| MAP11 | Heat map of activity (popular spots) | Gamma | P2 |
| MAP12 | Filter map by: today, this week, society, batch | Beta | P1 |
| MAP13 | Map moment → story card export | Beta | P0 |
| MAP14 | Notify tagged users | Beta | P0 |
| MAP15 | Admin-curated "featured moments" | Beta | P2 |

### 8.8 Community Feed & Posts — `P`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| P1 | User text + photo posts | Beta | P0 |
| P2 | Admin pinned announcements in feed | Alpha | P0 |
| P3 | Society posts (official) | Beta | P0 |
| P4 | Likes | Beta | P0 |
| P5 | Comments (1 level) — **admin-approved before visible** | Beta | P0 |
| P5b | Comment status: `pending` → `approved` / `rejected` | Beta | P0 |
| P5c | Author sees "Pending approval" after submitting comment | Beta | P0 |
| P6 | @mention users | Beta | P0 |
| P7 | Hashtags (`#GIKIConnect`, `#Batch34`) | Beta | P1 |
| P8 | Feed sort: New / Top (likes) / Following | Beta | P1 |
| P9 | Link post to event or meetup | Beta | P1 |
| P10 | Report post | Beta | P0 |
| P11 | Society channel filter (mini subreddit) | Beta | P1 |
| P12 | "Share your meetup story" auto-prompt | Beta | P1 |

### 8.9 Publishing (Who Can Post What) — `PUB`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| PUB1 | **Admin publish:** institute-wide announcement (pinned) | Alpha | P0 |
| PUB2 | **Admin publish:** official event | Alpha | P0 |
| PUB3 | **Society admin publish:** society event | Alpha | P0 |
| PUB4 | **Society admin publish:** society post to channel | Beta | P0 |
| PUB5 | **User publish:** community feed post | Beta | P0 |
| PUB6 | **User publish:** map moment pin | Beta | P0 |
| PUB7 | **User publish:** meetup (Alpha) | Alpha | P0 |
| PUB8 | Draft / preview before publish | Beta | P2 |
| PUB9 | Schedule post for later | Gamma | P3 |
| PUB10 | Publish permissions by role (RBAC) | Alpha | P0 |

### 8.10 Viral Sharing & Marketing — `V`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| V1 | Generate 1080×1920 story card (image) | Beta | P0 |
| V2 | Story card: branded template + QR deep link | Beta | P0 |
| V3 | "Share to Instagram" → download image + copy link | Beta | P0 |
| V4 | "Share to Snapchat" → download image | Beta | P0 |
| V5 | Deep link: QR → signup or event page | Beta | P0 |
| V6 | "Shared via GIKI Connect" watermark | Beta | P0 |
| V7 | Track share events (analytics) | Beta | P1 |
| V8 | Points for sharing (see GAM) | Gamma | P2 |
| V9 | Pre-made hashtag stickers on story card | Beta | P1 |
| V10 | Referral: "Invite a friend" link | Gamma | P2 |

### 8.11 Notifications — `N`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| N1 | New society event (followed societies) | Alpha | P0 |
| N2 | Meetup join / full / reminder | Alpha | P0 |
| N3 | New meetup chat message | Alpha | P0 |
| N4 | Recommended events digest (weekly) | Beta | P1 |
| N5 | **You were tagged** in post or map moment | Beta | P0 |
| N6 | **Your moment was liked** | Beta | P1 |
| N7 | **New moment at a place you follow** | Gamma | P2 |
| N8 | Admin announcement (broadcast) | Alpha | P0 |
| N9 | Push notifications (web/mobile) | Gamma | P1 |
| N10 | In-app notification center + read state | Alpha | P0 |

### 8.12 Discovery & Search — `D`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| D1 | Search people by hobby/batch | Gamma | P1 |
| D2 | Search events | Gamma | P1 |
| D3 | Explore: trending meetups | Beta | P1 |
| D4 | Explore: popular map locations | Beta | P1 |

### 8.13 Gamification — `GAM`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| GAM1 | Points ledger | Gamma | P2 |
| GAM2 | Points: attend event, create meetup, post moment, share story | Gamma | P2 |
| GAM3 | Profile badge display | Gamma | P2 |
| GAM4 | Monthly leaderboard (optional, low-key) | Gamma | P3 |

### 8.14 Admin & Moderation — `X`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| X1 | Admin dashboard | Alpha | P0 |
| X2 | Society verification workflow | Alpha | P0 |
| X3 | Content moderation queue | Alpha | P0 |
| X4 | Graduation cron job | Alpha | P0 |
| X5 | Analytics (DAU, posts, map pins, shares) | Beta | P1 |
| X6 | Feature flags (beta features on/off) | Alpha | P1 |
| X7 | Remove / hide post or moment | Alpha | P0 |
| X8 | Ban / suspend user | Alpha | P0 |
| X9 | **Comment moderation queue** (approve / reject / bulk) | Beta | P0 |
| X10 | Auto-flag comments (profanity, spam patterns) | Beta | P1 |
| X11 | Moderation SLA dashboard (< 24h target) | Beta | P1 |

### 8.15 Privacy & Identity — `PRV`

| ID | Feature | Phase | Priority |
|----|---------|-------|----------|
| PRV1 | Username is the only public display name on posts, chat, map, recommendations | Alpha | P0 |
| PRV2 | Real name stored privately (admin/DSA view only if needed) | Alpha | P0 |
| PRV3 | Batch/year used for recommendations internally — never shown on public cards | Alpha | P0 |
| PRV4 | Public profile shows: username, avatar, hobbies, bio (optional) | Alpha | P0 |
| PRV5 | Email never shown to other users | Alpha | P0 |
| PRV6 | No phone number field in student-facing profile | Alpha | P0 |
| PRV7 | Meetup member list shows usernames only | Alpha | P0 |

---

## 9. Campus Map — "GIK Map" (Deep Dive)

### 9.1 Concept

A ** stylized interactive map of GIKI campus** where students pin **moments** — photos and captions tied to real places. Think Snapchat Map meets campus nostalgia, but GIKI-only and tied to your events/meetups.

**"Temporary map" behavior:** Moments can optionally expire (default 30 days) so the map feels alive and current, not a graveyard of old posts. Users can also mark moments as "keep forever" (personal profile archive).

### 9.2 User Experience

```
MAP TAB
├── Full-screen campus map (pinch zoom, pan)
├── Glowing pins where moments exist
├── Tap pin → moment card (photo, caption, author, likes, tags)
├── Tap location label → "All moments at Sports Complex"
├── FAB (+) → "Drop a moment here"
│   ├── Take/upload photo
│   ├── Write caption
│   ├── Tag friends (@)
│   ├── Link to event/meetup (optional)
│   └── Confirm location (snap to nearest campus POI)
└── Filter bar: Today | This week | My batch | Following
```

### 9.3 Campus Locations (Seed Data)

Pre-define ~25–40 Points of Interest (POI) with map coordinates:

| Category | Examples |
|----------|----------|
| Academic | NAB, labs, library |
| Residential | Hostel blocks A–F, faculty housing |
| Sports | Sports complex, cricket ground, basketball |
| Social | Cafeteria, common rooms, amphitheater |
| Landmarks | Main gate, mosque, hill viewpoint |

**Implementation:** Store as `campus_locations` table with `lat`, `lng` on a **custom campus image coordinate system** (not GPS — GPS is imprecise on campus). Use percentage-based x/y on an illustrated map image for MVP.

### 9.4 Moment Lifecycle

```
CREATE → ACTIVE (visible on map) → EXPIRE (optional) → ARCHIVED (author profile only)
```

| State | Visible on map | Visible in feed |
|-------|----------------|-----------------|
| active | Yes | Yes |
| expired | No (or ghost pin) | Profile only |
| removed (mod) | No | No |

### 9.5 Technical Implementation

| Component | Approach |
|-----------|----------|
| Map render | **React** + custom SVG/PNG campus illustration OR **Mapbox** with custom campus tile (Phase 2+) |
| Pin coordinates | `map_x`, `map_y` (0–100%) relative to campus image — simpler than lat/lng |
| Pin clustering | When zoomed out, cluster nearby pins (use supercluster library) |
| Images | Supabase Storage → CDN URL in `map_moments` |
| Real-time | New pin appears via Supabase Realtime INSERT subscription |
| Tags | `map_moment_tags` junction table → triggers notification |

**Why not Google Maps for MVP?** Custom illustrated map feels more "GIKI", works offline-ish, no API costs, and you control the aesthetic.

### 9.6 Map + Marketing Connection

After posting a moment:
1. App shows **"Share to Story"** bottom sheet
2. Generates branded card with: photo, location name, caption snippet, QR, `#GIKIConnect`
3. User saves to camera roll → posts on Instagram/Snapchat
4. Friends scan QR → land on moment page or signup
5. Analytics track `share_exported` event

---

## 10. Publishing System — Admin + User + Society

### 10.1 Role-Based Publishing Matrix

| Content type | Student | Society admin | Platform admin |
|--------------|---------|---------------|----------------|
| Meetup | ✅ | ✅ | ✅ |
| Community post | ✅ (Beta) | ✅ | ✅ |
| Map moment | ✅ (Beta) | ✅ | ✅ |
| Society event | ❌ | ✅ | ✅ |
| Society channel post | ❌ | ✅ | ✅ |
| Institute announcement | ❌ | ❌ | ✅ (pinned) |
| Admin official event | ❌ | ❌ | ✅ |
| Feature/ban user | ❌ | ❌ | ✅ |

### 10.2 Publish Flow (User Post — Beta)

```
1. Tap (+) → Choose: Post | Moment | Meetup | Event (if society admin)
2. Compose content
3. Preview
4. Publish → appears in:
   - Community feed (if post)
   - GIK Map (if moment)
   - Meetups list (if meetup)
5. Followers / tagged users get notification
6. Optional: "Share to Story" prompt
```

### 10.3 Publish Flow (Admin Announcement — Alpha)

```
1. Admin dashboard → New announcement
2. Title + body + optional image
3. Pin to top of feed? (yes/no)
4. Publish → push to N8 (broadcast notification)
5. Shows as pinned card on home feed for 7 days
```

### 10.4 Content Moderation

**Posts and map moments:** Auto-flag profanity → user report → admin queue → remove / warn / suspend.

**Public comments (Beta):** **Pre-moderation by default** — every comment sits in `pending` until an admin approves it. Rejected comments are never shown publicly; author sees "Not approved."

| Step | Action |
|------|--------|
| 1 | User submits comment on post or map moment |
| 2 | Status = `pending`; author sees "Awaiting approval" |
| 3 | Admin reviews in moderation queue (FIFO) |
| 4a | Approve → comment visible; post author notified |
| 4b | Reject → hidden; optional reason to author |
| 5 | Repeat offenders → auto-flag user for review |

**Meetup group chat:** Not pre-moderated (private to members) but reportable; admin can read reported threads.

- SLA: resolve comment queue within 24 hours (Beta gate)
- Auto-flag: profanity filter + spam patterns (duplicate text, links)
- Admin actions: dismiss, remove content, warn, suspend user

---

## 11. Community Feed — Mini Facebook + Mini Reddit

### 11.1 Feed Structure

```
HOME TAB
├── Pinned announcement (admin, if any)
├── For You (recommended events + trending posts)
├── Following (societies + people you follow)
└── New post FAB

COMMUNITY TAB (Beta)
├── All posts (chronological)
├── Sort: New | Top (24h / 7d)
├── Filter by society channel
└── Each post: @username, image, caption, likes
    └── Comments (approved only) — submit → pending → visible after admin OK
```

**Public identity rule:** Every post, comment, chat message, and map moment displays **@username** only — never real name, batch, or year.

### 11.2 Post Types

| Type | Source | Appears in |
|------|--------|------------|
| `announcement` | Admin | Feed (pinned) + notifications |
| `society_post` | Society admin | Feed + society channel |
| `user_post` | Student | Feed |
| `map_moment` | Student | Feed + GIK Map |
| `event_share` | System/auto | Feed when user RSVPs "going" (optional) |
| `meetup_recap` | Prompted after meetup | Feed + map |

### 11.3 Engagement (Reddit-lite)

- **Like** = upvote (single count, toggle on/off)
- **Comment** = submit → **admin approves** → visible (one level, no nesting)
- **@mention** = notify tagged user by username
- **#hashtag** = discoverable tag (Beta)

No downvotes in v1 (avoid toxicity). Meetup **group chat** is separate — real-time, members only, not pre-moderated but reportable.

---

## 12. Viral Marketing & Story Sharing Loop

### 12.1 How Commercial Apps Do This (Plain English)

| App | What they do | What we copy |
|-----|--------------|--------------|
| **Instagram** | Share story with sticker/link | Branded image + QR download |
| **Snapchat** | Share with watermark | "via GIKI Connect" on story card |
| **Spotify Wrapped** | Personalized share card | "My GIKI week" card (Gamma) |
| **Eventbrite** | "I'm going" social share | RSVP → share event card |
| **Strava** | Activity map share | Map moment → location share card |

We do **not** integrate Instagram/Snapchat APIs (expensive, approval-heavy). We **generate an image** the user saves and uploads manually. This is how most startups start.

### 12.2 Story Card Spec

| Field | Value |
|-------|-------|
| Size | 1080 × 1920 px |
| Format | PNG |
| Content | User photo or event cover, location/event title, caption (truncated), GIKI Connect logo, QR code, hashtag |
| QR destination | `https://gikiconnect.app/m/[momentId]` or `/signup` |
| Generation | Client-side Canvas API or server-side `@vercel/og` |

### 12.3 Growth Flywheel

```
Student attends event / creates meetup
        ↓
App prompts: "Share your moment on GIK Map"
        ↓
Student posts moment + taps "Share to Story"
        ↓
Friends on Instagram see branded card + QR
        ↓
Friends sign up with GIKI email
        ↓
More users → more moments → more shares
```

### 12.4 Share Analytics Events

Track in `analytics_events` table:

| Event | When |
|-------|------|
| `share_card_generated` | User taps share |
| `share_card_downloaded` | Image saved |
| `qr_scan` | Someone opens QR link |
| `signup_from_qr` | Signup attributed to QR |

---

## 13. Notifications — How They Work

### 13.1 Notification Channels

| Channel | Alpha | Beta | Gamma |
|---------|-------|------|-------|
| In-app (bell icon) | ✅ | ✅ | ✅ |
| Email | Optional | ✅ | ✅ |
| Web push | ❌ | ❌ | ✅ |
| SMS | ❌ | ❌ | ❌ |

### 13.2 Notification Triggers (Complete)

| Trigger | Recipient | Channel | Phase |
|---------|-----------|---------|-------|
| Admin announcement | All active users | In-app + email | Alpha |
| Society event published | Followers of society | In-app | Beta |
| Meetup join | Creator | In-app | Alpha |
| Meetup full | Creator + members | In-app | Alpha |
| Meetup reminder (1h before) | Members | In-app | Alpha |
| Chat message | Meetup members | In-app + realtime | Alpha |
| **Tagged in post/moment** | Tagged user | In-app | Beta |
| **Someone liked your moment** | Author | In-app | Beta |
| Recommendation digest | User | In-app weekly | Beta |
| Event reminder | RSVPed users | In-app | Alpha |

### 13.3 "You Were Tagged" Flow (Beta)

```
1. User A posts map moment, tags @UserB
2. Server inserts map_moment_tags row
3. Server inserts notification row for UserB
4. Supabase Realtime pushes to UserB's client
5. UserB sees bell badge + "A tagged you at Sports Complex"
6. Tap → opens moment on map
7. UserB can: like, comment, share to their story
```

### 13.4 Notification Data Model

```sql
notifications (
  id, recipient_id, type, title, body,
  link_type,   -- 'moment','post','event','meetup','profile'
  link_id,
  read_at, created_at
)
```

---

## 14. Design & Theme

> **Design references (Mobbin):** Study these three apps with Fatima before Figma work.  
> [Meetup iOS](https://mobbin.com/apps/meetup-ios-9866ea6d-c9b7-49a5-acb6-1b6e8e8c9cbd) · [Alan iOS](https://mobbin.com/apps/alan-ios-4515c0bf-91d9-4283-835d-941997cb8cb1) · [Fi iOS](https://mobbin.com/apps/fi-ios-d5187e4f-113b-40c9-b87b-3ea77e2a5b29)

> **Code implementation:** `web/` folder — run `npm run dev` → [http://localhost:3000/design](http://localhost:3000/design) for the live component library. Home (`/`) shows a sample feed shell.

### 14.1 Brand Direction

**Concept:** *Meetup's discovery* + *Alan's warmth* + *Fi's polish* — on a GIKI campus canvas.

| App | What we borrow | What we skip |
|-----|----------------|--------------|
| **Meetup** | Event cards, map+list discovery, interest onboarding, group join UX | Public real names, open comments |
| **Alan** | One-question-per-screen onboarding, warm illustrations, friendly copy | Insurance-specific flows |
| **Fi** | Forest-green minimal UI, card layout, micro-animations, clean hierarchy | Banking/finance patterns |

**GIKI Connect should feel:** Warm, safe, scannable, mobile-native — not corporate, not chaotic.

### 14.2 Design Principles (from references)

1. **Visual-first events** (Meetup) — cover image + date + venue before long text
2. **One focus per screen** (Alan) — onboarding asks one thing; auto-advance on tap
3. **Calm density** (Fi) — generous whitespace, card surfaces, no clutter
4. **Username everywhere** (ours) — replace Meetup's real-name social proof with @username + hobby badges
5. **Thumb-zone actions** (Meetup + Fi) — primary CTA pinned bottom on detail screens
6. **Map ↔ list sync** (Meetup) — GIK Map pins sync with moment cards in bottom sheet

### 14.3 Color System

Blend **Fi Forest Green** with **GIKI campus warmth** (not Fi’s pure fintech teal-white — add cream/gold).

| Token | Hex | Inspiration | Usage |
|-------|-----|-------------|-------|
| Primary | `#1B4D3E` | Fi Forest Green | Nav, primary buttons, brand |
| Primary Light | `#2D7A5F` | Fi accent range | Hover, active chips |
| Primary Soft | `#E8F5F0` | Alan-style soft fill | Onboarding backgrounds, selected chips |
| Accent | `#E8A838` | GIKI gold | Map pins, badges, CTAs |
| Background | `#F7F5F0` | Warm off-white | Page bg (not pure white) |
| Surface | `#FFFFFF` | Fi cards | Event cards, post cards |
| Surface Elevated | `#FFFFFF` + shadow | Fi | Floating bottom sheet, modals |
| Text Primary | `#1A1A1A` | Fi | Headlines, usernames |
| Text Secondary | `#6B7280` | Fi | Meta (date, venue, captions) |
| Success | `#22C55E` | Meetup join confirm | "You're in!" states |
| Pending | `#F59E0B` | — | Comment awaiting approval |

**Dark mode:** Gamma (optional). Meetup-style dark feed is inspiring for night browsing but not Alpha scope.

### 14.4 Typography

| Role | Font | Inspiration |
|------|------|-------------|
| Headings | **Plus Jakarta Sans** (600–700) | Fi — geometric, modern |
| Body | **Inter** (400–500) | Fi — readable at small sizes |
| Micro-copy | Inter 13px | Alan — short, human sentences |

**Copy tone (Alan + Fi):** Friendly, short, never stiff.  
- ✅ "Pick what you're into — we'll handle the rest."  
- ❌ "Please select your areas of interest from the list below."

### 14.5 Spacing, Radius & Elevation

| Token | Value | Notes |
|-------|-------|-------|
| Card radius | `16px` | Fi-style rounded cards |
| Button radius | `12px` | Full-width primary on mobile |
| Chip radius | `999px` | Hobby tags (Meetup interest pills) |
| Page padding | `16px` | Consistent horizontal inset |
| Card gap | `12px` | Feed list spacing |
| Shadow | `0 2px 12px rgba(0,0,0,0.06)` | Subtle — Fi minimal elevation |

### 14.6 Navigation

**Alpha bottom nav** (Meetup pattern — 5 icons, labels, active = primary green):

```
Home | Events | Meetups | Discover | Profile
```

**Beta:** insert **Map** between Home and Events:

```
Home | Map | Events | Meetups | Profile
```

- Active tab: filled icon + primary color
- Inactive: gray outline icon
- Community feed: sub-tabs inside **Home** (Feed | Announcements | Following)

### 14.7 Screen-by-Screen — Reference → GIKI Connect

Use this table when building Figma. Fatima should screenshot matching flows from Mobbin for each row.

#### Auth & Onboarding (Alan-led)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| Splash | Fi | Logo + soft illustration (campus hills); brief fade-in |
| Email verify | Alan | Single field, one CTA, progress dots |
| Choose @username | Fi | Clean input, live availability check, helper text |
| Interest picker | **Meetup** | Collapsible categories (Sports, Music, Art…); multi-select chips |
| MCQ steps | **Alan** | One question per screen; tap option → auto-advance |
| Onboarding complete | Fi | Success animation + "You're in" → Home |

**Alan rules:** Max 12 onboarding steps visible via progress bar. No walls of form fields.

#### Home & Feed (Fi + Meetup)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| Home | Fi | Card stack, generous padding, pinned admin banner at top |
| For You row | Meetup | Horizontal scroll of recommended meetups/events |
| Community post | Fi card | @username, image, likes; comments show "Pending" badge if own |
| Empty state | Alan | Warm illustration + one CTA ("Explore events") |

#### Events (Meetup-led)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| Event list | **Meetup** | Image header on card, date pill, society name, RSVP count |
| Event detail | **Meetup** | Full-bleed cover → title → date/venue → description → sticky **RSVP** bar |
| Attendee preview | Meetup | Avatar stack of @usernames (max 5) + "12 going" |
| Society page | Meetup Groups | Cover, bio, Follow, upcoming events list |

#### Meetups (Meetup-led)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| Meetup list | Meetup | Category chips filter row; cards show spots left "3/8" |
| Create meetup | Alan | Step flow: What → When → Where → Max people |
| Meetup detail | Meetup | Host @username, members preview, **Join** / **Full** state |
| Join confirm | Meetup | Checkmark animation (subtle) → opens group chat |
| Group chat | Fi minimal | Bubbles, @username labels, no avatars required, report in header |

#### Discover & People (Meetup + Fi)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| People cards | Meetup + Fi | @username, shared hobby pills, **no batch/year** |
| Why recommended | Fi micro-copy | "You both like football & gaming" |
| Profile (public) | Fi | Avatar, @username, bio, hobbies — nothing else |

#### GIK Map (Meetup map + MixMapp pattern)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| Map view | **Meetup** map tab | Campus illustration; glowing pins; filter chips on top |
| Map + sheet | MixMapp / Meetup | Bottom sheet list syncs with pins; tap pin → card |
| Drop moment | Instagram simplicity | Photo → caption → location snap → publish |
| Moment detail | Meetup event detail | Image, @username, location, likes, share-to-story CTA |

#### Admin & Moderation (Fi clean dashboard)

| Screen | Borrow from | GIKI Connect spec |
|--------|-------------|-------------------|
| Announcement compose | Fi form cards | Title, body, pin toggle, publish |
| Comment queue | Fi list | Pending count badge; swipe or tap Approve/Reject |

### 14.8 Components Library (Figma / shadcn)

Build these first — Fatima's Week 1 deliverable:

| Component | Reference | Variants |
|-----------|-----------|----------|
| `EventCard` | Meetup | default, society, admin |
| `MeetupCard` | Meetup | open, full, completed |
| `PersonCard` | Fi | recommended, discover |
| `PostCard` | Fi | with image, text-only |
| `HobbyChip` | Meetup | selected, unselected |
| `PrimaryButton` | Fi | default, loading, disabled |
| `BottomSheet` | Meetup map | half, full |
| `ChatBubble` | Fi minimal | sent, received, system |
| `Username` | — | always `@username` in primary text color |
| `PendingBadge` | — | "Awaiting approval" for comments |
| `StickyActionBar` | Meetup | Join / RSVP / Share |

### 14.9 Motion & Micro-interactions

| Interaction | Reference | Implementation |
|-------------|-----------|----------------|
| Join meetup success | Meetup | Scale checkmark 200ms ease-out |
| Tab switch | Fi | Cross-fade content, no heavy slide |
| Card press | Fi | `scale(0.98)` on tap |
| Onboarding advance | Alan | Horizontal slide + progress dot fill |
| Map pin drop | — | Pin bounce on publish |
| Pull to refresh | Meetup | Standard on feeds |
| Skeleton loaders | Fi | Shimmer on cards while loading |

Use **Framer Motion** in Next.js for Alpha. Keep animations under 300ms.

### 14.10 Illustration & Empty States (Alan-led)

- Soft, flat campus illustrations (hills, NAB silhouette, students in abstract form)
- Optional mascot later (Gamma) — **do not** block Alpha on mascot design
- Empty states always: illustration + headline + single CTA
- Examples:
  - No meetups: "Nothing planned yet — start one?"
  - No comments approved: "Be the first to say something (after review)"

### 14.11 Map Visual Design

- Illustrated campus map (not satellite for Alpha)
- Pins: gold teardrop + small avatar circle (Meetup map marker clarity)
- Cluster: numbered circle, primary green border
- Bottom sheet: Fi-white card with rounded top corners `24px`
- Filter chips: Meetup-style horizontal scroll (Today | This week | Music | Sports)

### 14.12 Story Card Templates (Beta)

1. **Moment** — photo + location + QR + `#GIKIConnect`
2. **Event** — Meetup-style cover + date + QR
3. **Meetup recap** — group avatars as @username initials + "We met!" + QR

Fi-quality export: crisp typography, forest green footer bar, minimal clutter.

### 14.13 What NOT to Copy

| From references | Why not for GIKI Connect |
|-----------------|--------------------------|
| Meetup real names on cards | We use @username only |
| Meetup open event comments | We use admin-approved comments |
| Alan 3D mascot (yet) | Scope — use flat illustrations Alpha |
| Fi bank security patterns | Not a finance app |
| Dark mode as default | Alpha ships light mode; dark in Gamma |
| Meetup paid ticketing UI | Our events are RSVP/free |

### 14.14 Fatima's Design Deliverables Checklist

- [ ] Mobbin board: export 20 reference screens (Meetup, Alan, Fi)
- [ ] Figma variables: colors §14.3, spacing §14.5
- [ ] Component library §14.8 (10 core components)
- [ ] 8 hi-fi screens: Splash, Onboarding ×3, Home, Event detail, Meetup detail, Chat
- [ ] Mobile frame: **390×844** (iPhone 14) — primary design target
- [ ] Prototype: onboarding → home → join meetup → chat flow

---

## 15. Technical Architecture

### 15.1 Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14+ App Router, TypeScript |
| UI | Tailwind CSS, shadcn/ui |
| Auth | Supabase Auth (email domain restriction) |
| DB | PostgreSQL (Supabase) |
| Realtime | Supabase Realtime |
| Storage | Supabase Storage (images) |
| Map | Custom SVG/Canvas (MVP) → Mapbox optional later |
| Story cards | HTML Canvas or `@vercel/og` |
| Hosting | Vercel + Supabase |
| Cron | Supabase Edge Functions |
| Analytics | PostHog (free tier) or custom events table |

### 15.2 Architecture Diagram

```
                    ┌──────────────────────────────────────┐
                    │           CLIENT (Next.js)          │
                    │  Home · Map · Events · Meetups · Profile │
                    └───────────────┬──────────────────────┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          ▼                         ▼                         ▼
   ┌─────────────┐          ┌─────────────┐          ┌─────────────┐
   │ API Routes  │          │  Realtime   │          │   Storage   │
   │ Server      │          │  (live feed │          │   (images)  │
   │ Actions     │          │   chat,map) │          │             │
   └──────┬──────┘          └──────┬──────┘          └──────┬──────┘
          │                        │                        │
          └────────────────────────┼────────────────────────┘
                                   ▼
                    ┌──────────────────────────────────────┐
                    │         PostgreSQL (Supabase)         │
                    │  profiles · events · meetups · posts  │
                    │  map_moments · notifications · ...  │
                    └───────────────┬──────────────────────┘
                                    │
                    ┌───────────────┴──────────────────────┐
                    │         Edge Functions (Cron)         │
                    │  graduation · moment expiry · digest  │
                    └──────────────────────────────────────┘
```

### 15.3 Auth Flow

```
@giki.edu.pk email → OTP → verify → profile created (onboarding) → active
```

### 15.4 Graduation Cron

Daily: `expected_graduation_date < today` → `status = graduated` → revoke sessions

### 15.5 Moment Expiry Cron (Beta)

Daily: `expires_at < now()` → `status = expired` → remove from map (keep in author archive)

### 15.6 Recommendation Algorithm (unchanged from v1)

Weighted Jaccard on hobbies + MCQ cosine similarity. Cache in `user_recommendations`.

---

## 16. Database Schema (Complete)

### 16.1 Entity Relationship Overview

```
profiles ──┬── profile_hobbies ── hobbies
           ├── onboarding_answers
           ├── posts ── post_likes, post_comments, post_mentions
           ├── map_moments ── map_moment_tags, map_moment_likes
           ├── meetups ── meetup_members ── meetup_messages
           ├── event_rsvps ── events ── societies
           ├── notifications
           ├── points_ledger
           └── reports

campus_locations ── map_moments
```

### 16.2 Full Table Definitions

```sql
-- ─── IDENTITY ───
profiles (
  id                    UUID PK DEFAULT gen_random_uuid(),
  auth_id               TEXT UNIQUE NOT NULL,
  email                 TEXT UNIQUE NOT NULL,  -- @giki.edu.pk — NEVER shown to other users
  username              TEXT UNIQUE NOT NULL,  -- ONLY public identifier (3-20 chars)
  real_name             TEXT NOT NULL,         -- PRIVATE — admin/DSA only
  avatar_url            TEXT,
  bio                   TEXT,                  -- optional public bio (max 160 chars)
  batch_number          INT,                   -- PRIVATE — used for recommendations only
  year_of_study         INT,                   -- PRIVATE
  department            TEXT,                  -- PRIVATE (or optional public in Gamma)
  hostel_block          TEXT,                  -- PRIVATE — internal matching only
  role                  TEXT CHECK (role IN ('student','masters','faculty','society_admin','admin')),
  status                TEXT CHECK (status IN ('onboarding','active','suspended','graduated')),
  is_beta_tester        BOOLEAN DEFAULT false,
  entry_year            INT,
  expected_graduation_date DATE,
  points_total          INT DEFAULT 0,
  created_at            TIMESTAMPTZ DEFAULT now(),
  updated_at            TIMESTAMPTZ DEFAULT now()
);
-- NOTE: No phone_number column. Contact stays in-app only.

-- ─── ONBOARDING ───
hobbies ( id SERIAL PK, slug TEXT UNIQUE, label TEXT, icon TEXT );
profile_hobbies ( profile_id UUID FK, hobby_id INT FK, PRIMARY KEY (profile_id, hobby_id) );
onboarding_answers ( profile_id UUID, question_id TEXT, answer JSONB, PRIMARY KEY (profile_id, question_id) );

-- ─── SOCIETIES ───
societies (
  id UUID PK, name TEXT, slug TEXT UNIQUE, description TEXT,
  logo_url TEXT, verified BOOLEAN DEFAULT false, created_by UUID FK
);
society_members ( society_id UUID, profile_id UUID, role TEXT, PRIMARY KEY (society_id, profile_id) );
society_follows ( society_id UUID, profile_id UUID, PRIMARY KEY (society_id, profile_id) );

-- ─── EVENTS ───
events (
  id UUID PK, society_id UUID FK NULL, created_by UUID FK,
  title TEXT, description TEXT, cover_url TEXT,
  starts_at TIMESTAMPTZ, ends_at TIMESTAMPTZ,
  venue TEXT, location_id UUID FK NULL,  -- link to campus_locations
  tags TEXT[], capacity INT,
  status TEXT CHECK (status IN ('draft','published','cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);
event_rsvps ( event_id UUID, profile_id UUID, status TEXT, created_at TIMESTAMPTZ, PRIMARY KEY (event_id, profile_id) );

-- ─── MEETUPS ───
meetups (
  id UUID PK, creator_id UUID FK, title TEXT, description TEXT,
  category TEXT, tags TEXT[], starts_at TIMESTAMPTZ,
  venue TEXT, location_id UUID FK NULL,
  max_capacity INT, status TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
meetup_members ( meetup_id UUID, profile_id UUID, joined_at TIMESTAMPTZ, PRIMARY KEY (meetup_id, profile_id) );
meetup_messages (
  id         UUID PK,
  meetup_id  UUID FK,
  sender_id  UUID FK,
  body       TEXT,
  created_at TIMESTAMPTZ
);
-- Display sender as @username only in UI. No phone/link sharing (filter in API).

event_group_messages (
  id         UUID PK,
  event_id   UUID FK,
  sender_id  UUID FK,
  body       TEXT,
  created_at TIMESTAMPTZ
);
-- Same rules as meetup_messages; members = users with RSVP status 'going'

-- ─── CAMPUS MAP ───
campus_locations (
  id UUID PK,
  name TEXT NOT NULL,           -- "Sports Complex"
  slug TEXT UNIQUE,
  category TEXT,                -- academic, residential, sports, social
  map_x FLOAT NOT NULL,         -- 0-100 % on campus image
  map_y FLOAT NOT NULL,
  description TEXT,
  icon TEXT
);

map_moments (
  id UUID PK,
  author_id UUID FK → profiles,
  location_id UUID FK → campus_locations,
  map_x FLOAT,                  -- fine-tune within location
  map_y FLOAT,
  image_url TEXT NOT NULL,
  caption TEXT,
  event_id UUID FK NULL,
  meetup_id UUID FK NULL,
  likes_count INT DEFAULT 0,
  status TEXT CHECK (status IN ('active','expired','removed')),
  expires_at TIMESTAMPTZ,       -- NULL = never expires
  created_at TIMESTAMPTZ DEFAULT now()
);

map_moment_tags (
  moment_id UUID FK → map_moments,
  tagged_profile_id UUID FK → profiles,
  PRIMARY KEY (moment_id, tagged_profile_id)
);

map_moment_likes (
  moment_id UUID FK,
  profile_id UUID FK,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (moment_id, profile_id)
);

-- ─── COMMUNITY FEED ───
posts (
  id UUID PK,
  author_id UUID FK,
  society_id UUID FK NULL,      -- if official society post
  post_type TEXT CHECK (post_type IN ('user_post','society_post','announcement','meetup_recap')),
  title TEXT,                   -- for announcements
  body TEXT,
  image_url TEXT,
  event_id UUID FK NULL,
  meetup_id UUID FK NULL,
  moment_id UUID FK NULL,       -- cross-link to map
  is_pinned BOOLEAN DEFAULT false,
  pinned_until TIMESTAMPTZ,
  likes_count INT DEFAULT 0,
  comments_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

post_likes ( post_id UUID, profile_id UUID, PRIMARY KEY (post_id, profile_id) );
post_comments (
  id UUID PK,
  post_id UUID FK,
  author_id UUID FK,
  body TEXT,
  status TEXT CHECK (status IN ('pending','approved','rejected')) DEFAULT 'pending',
  reviewed_by UUID FK NULL,       -- admin who approved/rejected
  reviewed_at TIMESTAMPTZ,
  rejection_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
-- Public API returns only status = 'approved' comments
map_moment_comments (
  id UUID PK,
  moment_id UUID FK,
  author_id UUID FK,
  body TEXT,
  status TEXT CHECK (status IN ('pending','approved','rejected')) DEFAULT 'pending',
  reviewed_by UUID FK NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);
post_mentions ( post_id UUID, mentioned_profile_id UUID, PRIMARY KEY (post_id, mentioned_profile_id) );
post_hashtags ( post_id UUID, tag TEXT, PRIMARY KEY (post_id, tag) );

-- ─── NOTIFICATIONS ───
notifications (
  id UUID PK,
  recipient_id UUID FK → profiles,
  type TEXT,                    -- 'tag','like','event','meetup','announcement','message'
  title TEXT,
  body TEXT,
  link_type TEXT,
  link_id UUID,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── RECOMMENDATIONS ───
user_recommendations (
  profile_id UUID, recommended_id UUID, score FLOAT, reason TEXT,
  computed_at TIMESTAMPTZ, PRIMARY KEY (profile_id, recommended_id)
);

-- ─── GAMIFICATION ───
points_ledger (
  id UUID PK, profile_id UUID FK, action TEXT, points INT, ref_type TEXT, ref_id UUID,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── ANALYTICS ───
analytics_events (
  id UUID PK, profile_id UUID FK NULL, event_name TEXT, metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── MODERATION ───
reports (
  id UUID PK, reporter_id UUID FK, target_type TEXT, target_id UUID,
  reason TEXT, status TEXT DEFAULT 'open', resolved_by UUID FK NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

comment_moderation_queue (
  id UUID PK,
  comment_type TEXT CHECK (comment_type IN ('post_comment','map_moment_comment')),
  comment_id UUID NOT NULL,
  status TEXT DEFAULT 'pending',
  assigned_to UUID FK NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ─── FEATURE FLAGS ───
feature_flags ( key TEXT PK, enabled BOOLEAN, beta_only BOOLEAN DEFAULT false );
```

### 16.3 Key Triggers

```sql
-- Auto-lock meetup when full
CREATE FUNCTION check_meetup_capacity() ...
-- Increment likes_count on map_moments / posts
CREATE FUNCTION increment_like_count() ...
-- Notify on tag insert
CREATE FUNCTION notify_on_tag() ...
-- On comment insert → add to moderation queue, notify admins
CREATE FUNCTION queue_comment_for_moderation() ...
```

### 16.4 Public Profile View (Database)

Expose via API view `public_profiles` — **only these columns:**

```sql
CREATE VIEW public_profiles AS
SELECT id, username, avatar_url, bio
FROM profiles
WHERE status = 'active';
```

Hobbies are joined separately. **Never** expose `real_name`, `email`, `batch_number`, `year_of_study`, `hostel_block` in public APIs.

### 16.5 RLS Policies (Summary)

| Table | Read | Write |
|-------|------|-------|
| profiles (own) | Full row | Own profile only |
| profiles (others) | `public_profiles` view only | — |
| map_moments | All active | Own + admin |
| posts | All active | Own + society_admin + admin |
| post_comments | `approved` only (public) | Insert own (→ pending) |
| meetup_messages | Meetup members | Meetup members |
| notifications | Own only | System only |
| announcements | All | Admin only |

---

## 17. API & Integration Map

### 17.1 API Routes (Next.js)

| Method | Route | Phase | Purpose |
|--------|-------|-------|---------|
| POST | `/api/auth/verify-email` | Alpha | Domain check |
| GET/PATCH | `/api/profile` | Alpha | Profile CRUD (private fields) |
| GET | `/api/profile/public/[username]` | Alpha | Public profile — username, avatar, bio, hobbies only |
| POST | `/api/onboarding` | Alpha | Save MCQs + hobbies |
| GET | `/api/events` | Alpha | List events |
| POST | `/api/events` | Alpha | Create (society/admin) |
| POST | `/api/events/[id]/rsvp` | Alpha | RSVP |
| GET/POST | `/api/meetups` | Alpha | Meetups |
| POST | `/api/meetups/[id]/join` | Alpha | Join meetup |
| GET/POST | `/api/meetups/[id]/messages` | Alpha | Chat |
| GET | `/api/recommendations/people` | Alpha | People recs |
| POST | `/api/admin/announcements` | Alpha | Admin publish |
| GET | `/api/map/locations` | Beta | Campus POIs |
| GET/POST | `/api/map/moments` | Beta | Map moments |
| POST | `/api/map/moments/[id]/like` | Beta | Like moment |
| GET/POST | `/api/posts` | Beta | Community feed |
| POST | `/api/posts/[id]/like` | Beta | Like post |
| POST | `/api/share/generate-card` | Beta | Story card PNG |
| GET | `/api/notifications` | Alpha | Notification center |
| POST | `/api/posts/[id]/comments` | Beta | Submit comment (→ pending) |
| GET | `/api/admin/comments/pending` | Beta | Moderation queue |
| POST | `/api/admin/comments/[id]/approve` | Beta | Approve comment |
| POST | `/api/admin/comments/[id]/reject` | Beta | Reject comment |
| POST | `/api/reports` | Alpha | Report content |

### 17.2 Realtime Subscriptions

| Channel | Table | Use |
|---------|-------|-----|
| `meetup:{id}` | meetup_messages | Chat |
| `feed:posts` | posts | Live feed |
| `map:moments` | map_moments | New pins |
| `notifications:{userId}` | notifications | Bell badge |

---

## 18. Feature Traceability Matrix

*Every feature → phase → owner → DB table → API*

**Owner key:** Saadia = backend/infra · Fatima = frontend/UI

| ID | Feature | Phase | Saadia (backend) | Fatima (frontend) | DB | API |
|----|---------|-------|------------------|-------------------|-----|-----|
| A1 | GIKI auth | Alpha | Auth + RLS | Login UI | profiles | auth |
| A10 | Public username | Alpha | Schema + public_profiles view | Username picker UI | profiles | /api/profile |
| PRV1 | Username-only display | Alpha | API filters private fields | @username everywhere | profiles | /api/profile/public |
| C1 | Meetup group chat | Alpha | Realtime + messages API | Chat component | meetup_messages | /api/meetups/.../messages |
| C6 | Block phone in chat | Alpha | Message filter middleware | — | meetup_messages | — |
| E3 | Admin events | Alpha | Events API | Admin UI | events | /api/events |
| M3 | Meetup capacity lock | Alpha | DB trigger | Join UI | meetups | /api/meetups |
| PUB1 | Admin announce | Alpha | Announce API | Feed pin UI | posts | /api/admin/announcements |
| P5 | Admin-approved comments | Beta | Comment queue API | Comment UI + pending state | post_comments | /api/admin/comments |
| X9 | Moderation queue | Beta | Approve/reject endpoints | Admin mod UI | comment_moderation_queue | /api/admin/comments |
| MAP1 | Campus map | Beta | Locations seed | Map component | campus_locations | /api/map/locations |
| MAP3 | Drop moment | Beta | Moments API | Pin drop UX | map_moments | /api/map/moments |
| P1 | User posts | Beta | Posts API | Post composer | posts | /api/posts |
| V1 | Story card | Beta | QR endpoint | Canvas generator | analytics_events | /api/share/generate-card |
| GAM1 | Points | Gamma | Ledger API | Badge UI | points_ledger | /api/points |

---

## 19. User Flows

### 19.1 New User (Alpha)

```
Download/link → Sign up (@giki.edu.pk) → OTP → Choose @username
→ Onboarding (real name private, hobbies, MCQs) → Home feed
→ See events + @username-only recommendations → Join meetup
→ Coordinate in in-app group chat (no WhatsApp)
```

### 19.1b Senior ↔ Junior Connect (Privacy Flow)

```
Senior sees recommendation: "@nightowl_34 — also plays guitar" (no batch shown)
→ Senior joins same meetup or sends group chat message
→ Junior replies in meetup chat — still username-only
→ Optional (Gamma): mutual "reveal identity" if both agree
```

### 19.2 Drop a Map Moment (Beta)

```
Map tab → Tap location → (+) Add moment → Upload photo → Caption
→ Tag @friends → Link meetup (optional) → Publish
→ Pin appears on map → Tagged users notified
→ "Share to Story?" → Download card → Instagram
```

### 19.3 Admin Publishes Announcement (Alpha)

```
Admin dashboard → New announcement → Write + image → Pin? → Publish
→ All users get notification → Pinned on home feed
```

### 19.4 Meetup → Moment → Share (Beta)

```
Create meetup → People join → Chat → Meetup happens → Status: completed
→ App prompts: "How was it? Drop a moment!" → User posts to map
→ Shares to Snapchat → Friend scans QR → Signs up
```

---

### 19.5 Comment Approval Flow (Beta)

```
User comments on community post → Status: pending
→ User sees "Your comment is awaiting approval"
→ Admin sees queue → Approve or Reject
→ If approved: comment visible as @username
→ Post author notified; if rejected: author sees optional reason
```

---

## 20. Work Division — Saadia & Fatima

> **Updated v2.1:** Saadia starts the app skeleton, schema, and backend. Fatima handles UI/UX and frontend implementation.

### 20.1 Roles

| Saadia Asghar (you) | Fatima Bursam |
|---------------------|---------------|
| GitHub repo + project skeleton | Figma wireframes + design system |
| Supabase project + **full schema migrations** | UI components (Tailwind + shadcn) |
| Auth (`@giki.edu.pk`) + RLS policies | Onboarding, home, events, meetup screens |
| All API routes + server actions | Meetup chat UI (wired to your APIs) |
| Realtime subscriptions (backend) | GIK Map UI (Beta) |
| Recommendation engine + cron jobs | Community feed + comment UI |
| Comment moderation API + admin endpoints | Admin dashboard UI |
| Deployment (Vercel + Supabase prod) | Story card canvas generator |
| Seed data (hobbies, campus locations) | User testing + polish + accessibility |

### 20.2 How You Work Together

```
SAADIA builds API + schema  →  FATIMA builds UI against it
         ↓                              ↓
   OpenAPI or shared types doc    Figma matches your routes
         ↓                              ↓
   Deploy staging URL            Connect frontend to staging
```

**Week 1 rule:** Saadia ships auth + empty schema + `/api/profile` before Fatima wires onboarding UI.

### 20.3 Timeline by Phase

#### Phase 0 — Planning (Weeks 1–2)

| Saadia | Fatima |
|--------|--------|
| GitHub repo `giki-connect` + Next.js scaffold | Brand + Figma — **Mobbin refs: Meetup, Alan, Fi (§14)** |
| Supabase project + **schema v1 migration** | High-fidelity mockups (8 screens per §14.14) |
| Auth spike (`@giki.edu.pk` + username) | Design tokens (colors §14.3, spacing §14.5) |
| API structure doc / shared TypeScript types | Component library §14.8 in Figma |
| Seed hobbies + campus_locations SQL | PRD review with team |

#### Phase 1 — Alpha (Weeks 3–8)

| Saadia | Fatima |
|--------|--------|
| Profiles + `public_profiles` view + onboarding API | Onboarding wizard UI (username step first) |
| Events + societies API | Home feed + event cards |
| Meetups API + capacity trigger | Meetup create/join UI |
| Realtime meetup chat backend | Meetup chat component (@username display) |
| Recommendations job | Discover / people cards (no batch shown) |
| Admin APIs + graduation cron | Admin announcement UI |
| Notification service | Beta signup landing page |
| Phone-number filter in chat API | Group chat UX polish |

#### Phase 2 — Beta Social (Weeks 9–14)

| Saadia | Fatima |
|--------|--------|
| Map moments API + locations | **GIK Map** interactive component |
| Posts API + comment moderation queue | Community feed + post composer |
| Approve/reject comment endpoints | Comment pending/approved UI |
| Tag + like + notify triggers | Tag picker (@username) |
| Share analytics events | Story card generator (Canvas) |
| Moment expiry cron | Society channel UI |
| Admin moderation dashboard API | Admin moderation dashboard UI |

#### Phase 3 — Gamma (Weeks 15–20)

| Saadia | Fatima |
|--------|--------|
| Points ledger API | Points + badges UI |
| DM API (username-only) | DM chat UI |
| Search indexes | Search UI |
| FCM push backend | Push permission UX |
| E2E tests + prod deploy | GA polish + accessibility |

### 20.4 Ownership Summary

```
SAADIA (Backend / Infra / Start)     FATIMA (Frontend / Design)
──────────────────────────────       ───────────────────────────
Repo + folder structure              Figma & prototypes
Database schema & migrations         React pages & components
Auth, RLS, security                  Design tokens & theming
API routes & validation              @username display everywhere
Realtime, cron, recommendations      Map, feed, chat UI
Comment moderation backend           Admin mod UI
Deploy + monitoring                  Share cards, polish, a11y
```

---

## 21. Beta Program

### 21.1 Alpha Beta (Week 8)

- **Size:** 30 students (Batch 34, your network)
- **Features:** Auth, @username, onboarding, events, meetups, **in-app group chat**, recommendations, admin announce
- **Privacy test:** Confirm seniors/juniors comfortable connecting via username only
- **Feedback:** Google Form after 2 weeks
- **Channel:** WhatsApp group for bugs

### 21.2 Open Beta (Week 14)

- **Size:** 200 students (all batches)
- **New features:** GIK Map, posts, admin-approved comments, tags, story share
- **Ambassadors:** 2 per batch (14 ambassadors) — give `is_beta_tester` + early access
- **Feedback:** In-app feedback button + weekly survey

### 21.3 Beta Tester Perks

- Early access to map
- "Founding Member" badge on profile (Gamma)
- Name in credits / about page

---

## 22. Pre-Development Checklist

### Product
- [ ] App name finalized (GIKI Connect?)
- [ ] Phase 1 scope signed by both founders
- [ ] **Work split agreed:** Saadia = backend/skeleton, Fatima = UI/frontend
- [ ] Username rules agreed (length, uniqueness, no real names in public)
- [ ] Comment pre-moderation policy signed by DSA
- [ ] Map illustration source (design student? Fiverr? trace satellite?)
- [ ] Society onboarding list (first 3–5)
- [ ] Beta ambassador list

### Technical
- [ ] Student email format confirmed with IT
- [ ] **Saadia:** Supabase project + schema v1 (with username + comment moderation)
- [ ] **Saadia:** GitHub repo + Next.js scaffold
- [ ] **Fatima:** Figma file + design tokens
- [ ] Feature flags table for beta gating

### Campus
- [ ] DSA meeting scheduled
- [ ] Moderation policy drafted
- [ ] Community guidelines written

| Design |
| [ ] **Fatima:** Mobbin study — Meetup, Alan, Fi (links in §14) |
| [ ] Figma variables from §14.3–14.5 |
| [ ] 8 hi-fi screens per §14.14 |

---

## 23. User Stories (All Phases)

### Alpha
1. As a student, I sign up with GIKI email and choose a **@username** so others never see my real name or batch.
2. As a new user, I complete the interest quiz so I get recommendations based on hobbies — not year.
3. As a society EC, I publish an event so students can RSVP.
4. As DSA admin, I publish a pinned announcement so all students see it.
5. As a student, I create a meetup and coordinate via **in-app group chat** — no WhatsApp numbers.
6. As a senior, I can join a junior's meetup without social awkwardness because only @username is visible.
7. As a graduate, my account is automatically deactivated.

### Beta
8. As a student, I drop a moment on the campus map with a photo and location.
9. As a student, I tag @friends in a moment so they get notified.
10. As a tagged user, I get a notification and can share the moment to my Instagram story.
11. As a student, I comment on a community post — it goes to **admin approval** before appearing.
12. As an admin, I approve or reject pending comments to keep the community safe.
13. As a student, after a meetup I am prompted to share a recap moment.
14. As a society admin, I post to our society channel.

### Gamma
15. As a student, I earn points for attending events and sharing moments.
16. As a student, I DM someone by @username (no phone exchange).
17. As a student, I search for people who share my hobbies.

---

## 24. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| First contentful paint | < 2s on 4G |
| Map pin render | < 1s for 100 pins |
| Chat latency | < 500ms |
| Image upload | < 5MB, compress client-side |
| Uptime | 99% |
| Concurrent users | 500+ |
| Mobile viewport | 360px min |
| Offline | Map image cached; graceful offline message |

---

## 25. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Map illustration delay | Beta slip | Use placeholder map Week 9; swap illustration Week 11 |
| Low Beta adoption | High | Batch ambassadors + society partnerships |
| Inappropriate map photos | High | Report button + mod queue + image review |
| Comment queue backlog | Medium | Admin dashboard + 24h SLA; start with 2 moderators |
| Users share WhatsApp in chat | Medium | Auto-filter phone patterns; warn + report |
| Anonymous abuse | Medium | Report/block; admin can see real identity |
| Senior-junior trust | Low | Username-only design; measure in Alpha survey |
| Scope creep | High | Phase gates; feature flags |
| Instagram share friction | Medium | One-tap download + clear instructions |
| Supabase free tier limits | Medium | Monitor usage; upgrade if needed |

---

## 26. Legal, Privacy & Campus Policy

- **Data storage:** Supabase (specify region; prefer closest to PK)
- **Consent:** ToS + privacy policy at signup — explain username vs private real name
- **Public data:** Only `username`, `avatar_url`, `bio`, and hobbies are visible to other students
- **Private data:** `real_name`, `email`, `batch_number`, `year_of_study`, `hostel_block` — stored for matching and admin only
- **No phone numbers:** Platform does not collect or display student phone numbers
- **Photos:** Users grant license to display on platform; deleted on account removal
- **Moderation:** DSA contact for escalations; admins can view real identity for reported users
- **Graduation:** Data retained 90 days then anonymized (configurable)
- **Minors:** All users 18+ (university assumption)

---

## 27. Privacy & Username-Only Profiles

### 27.1 Why Username-Only?

| Problem | Solution |
|---------|----------|
| Senior hesitates to message a junior | @username hides year/batch |
| Junior intimidated by senior's profile | No "4th year" badge on public view |
| Students fear gossip | Real name not searchable by peers |
| WhatsApp harassment after matching | No numbers — chat stays in app |

### 27.2 What Students See vs What the System Knows

| Field | Student sees (public) | System stores (private) | Admin sees |
|-------|----------------------|-------------------------|------------|
| Username | ✅ | ✅ | ✅ |
| Avatar | ✅ | ✅ | ✅ |
| Bio | ✅ | ✅ | ✅ |
| Hobbies | ✅ | ✅ | ✅ |
| Real name | ❌ | ✅ | ✅ |
| Email | ❌ | ✅ | ✅ |
| Batch / year | ❌ | ✅ (for matching) | ✅ |
| Department | ❌ | ✅ | ✅ |
| Hostel | ❌ | ✅ (for matching) | ✅ |

### 27.3 Username Rules

- 3–20 characters: letters, numbers, underscore
- Unique across active users
- Chosen at signup (changeable once per semester — Gamma)
- Displayed everywhere as `@username`
- Recommendations show: *"@nightowl — also likes football, guitar"* — never batch

### 27.4 Onboarding Order

```
1. Verify @giki.edu.pk email
2. Choose @username (public)
3. Enter real name (private — "only used for admin verification")
4. Enter batch, year, department (private — "helps us match you better")
5. Hobbies + MCQs (public hobbies, private MCQ vectors)
```

---

## 28. In-App Communication Policy

### 28.1 Core Rule

> **All meetup and event coordination happens inside GIKI Connect. No WhatsApp numbers, no external links in chat (Alpha/Beta).**

### 28.2 Chat Types

| Type | Who accesses | Moderation | Phase |
|------|--------------|------------|-------|
| **Meetup group chat** | Meetup members only | Report-based | Alpha |
| **Event group chat** | RSVP "going" members | Report-based | Alpha |
| **Society event chat** | Society followers + RSVPs | Society admin + report | Beta |
| **Direct message** | Two users by @username | Report-based | Gamma |

### 28.3 Anti-WhatsApp Measures

| Measure | Implementation |
|---------|----------------|
| No phone field on profile | Schema has no `phone_number` column |
| Chat filter | Regex block: phone patterns, `wa.me`, `whatsapp` links |
| System banner | On first chat open: "Keep conversations here — don't share personal numbers" |
| Report flow | Report message → admin reviews → suspend if needed |
| Audit trail | All messages stored with timestamp + sender_id |

### 28.4 Why Group Chat First (Not DMs)

- Safer for new users (meetup context, not cold DMs)
- Matches your use case: jam session, football, study group
- Easier to moderate (group reports)
- DMs added in Gamma after trust is established

---

## 29. Comment Moderation System

### 29.1 Scope

**Pre-moderated (admin approval required):**
- Community feed post comments
- Map moment comments

**Not pre-moderated (report-only):**
- Meetup group chat
- Event group chat

### 29.2 Admin Moderation UI (Beta)

```
ADMIN → Moderation → Comments Queue
├── Pending (12)
│   ├── @user_a on post "..." — [Approve] [Reject]
│   └── @user_b on moment at NAB — [Approve] [Reject]
├── Approved today: 45
└── Rejected today: 3
```

### 29.3 Comment States

| Status | Visible to public | Visible to author |
|--------|-------------------|-------------------|
| `pending` | No | "Awaiting approval" |
| `approved` | Yes | Normal |
| `rejected` | No | "Not approved" + optional reason |

### 29.4 Who Can Moderate?

| Role | Can approve comments |
|------|---------------------|
| `admin` (DSA / platform) | ✅ |
| `society_admin` | Own society posts only (optional) |
| `student` | ❌ |

### 29.5 Spam Prevention

- Rate limit: max 5 comments per hour per user
- Auto-flag: profanity list, duplicate text, URLs
- Repeat rejections (3+) → user flagged for suspension review

---

## 30. Appendices

### A. Campus Location Seed List (Starter)

NAB, Library, Cafeteria, Sports Complex, Cricket Ground, Basketball Court, Main Mosque, Hostel A–F, Faculty Housing, Main Gate, Amphitheater, Common Room (per hostel), Hill Viewpoint, IT Department, Medical Center

### B. Onboarding MCQs (unchanged from v1)

1. Friday 8 PM: Sports / Music / Gaming / Study / Hangout
2. Ideal group size: 2–3 / 4–6 / 7–10 / 10+
3. Before GIKI main hobby: [hobby list]
4. Planning style: Spontaneous / Day ahead / Week ahead
5. New people: Approach / Wait / Depends
6. Competition level: Casual / Moderate / Intense
7. Music taste: Rock / Pop / Classical / Rap / Any
8. Best meetup time: Morning / Afternoon / Evening / Late night

### C. Story Card Copy

- Header: "GIKI Connect"
- Footer: "Scan to join your campus →"
- Hashtags: `#GIKIConnect` `#Batch34` `#GIKIMap`

### D. Glossary

| Term | Meaning |
|------|---------|
| **Moment** | Photo + caption pinned to map location |
| **Meetup** | Student-created small hangout |
| **Event** | Official society or admin event |
| **Username** | Public display name — only identifier shown to other students |
| **Real name** | Private field — admin/verification only |
| **GIK Map** | Campus map feature |
| **Story card** | 1080×1920 shareable image for Instagram/Snapchat |
| **POI** | Point of Interest on campus map |

### E. Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jun 24, 2026 | Initial PRD |
| 2.0 | Jun 24, 2026 | Added GIK Map, publishing, community feed, viral loop, phased rollout |
| 2.1 | Jun 24, 2026 | Username-only privacy, in-app chat, admin comments, work split |
| 2.2 | Jun 24, 2026 | Design inspiration from Meetup, Alan, Fi (Mobbin references); expanded §14 |

### F. Design Reference Links

| App | Mobbin | What to screenshot |
|-----|--------|-------------------|
| Meetup | [Meetup iOS](https://mobbin.com/apps/meetup-ios-9866ea6d-c9b7-49a5-acb6-1b6e8e8c9cbd) | Event list, event detail, map, interest onboarding, group join |
| Alan | [Alan iOS](https://mobbin.com/apps/alan-ios-4515c0bf-91d9-4283-835d-941997cb8cb1) | Onboarding steps, empty states, warm illustrations, success screens |
| Fi | [Fi iOS](https://mobbin.com/apps/fi-ios-d5187e4f-113b-40c9-b87b-3ea77e2a5b29) | Home cards, typography, green buttons, splash, micro-animations |

---

## 31. Immediate Next Steps

| # | Action | Owner | By when |
|---|--------|-------|---------|
| 1 | Team kickoff: review PRD v2.1, sign Phase 1 scope | Both | Week 1 |
| 2 | **GitHub repo + Next.js scaffold + folder structure** | **Saadia** | Week 1 |
| 3 | **Supabase project + schema v1 (username, profiles, comments)** | **Saadia** | Week 1 |
| 4 | **Figma wireframes** — use §14 Mobbin refs (Meetup/Alan/Fi) | **Fatima** | Week 1 |
| 5 | Shared TypeScript types doc for API contracts | Saadia | Week 1 |
| 6 | Email IT (`ithelpdesk@giki.edu.pk`) — email format | Both | Week 1 |
| 7 | Email DSA (`dsa@giki.edu.pk`) — pilot + comment moderation policy | Both | Week 2 |
| 8 | Recruit 5 Alpha beta testers from Batch 34 | Saadia | Week 2 |

---

*This document is the single source of truth. Update version on every scope change. Nothing ships without a feature ID from Section 8.*
