

---

## RECODE — Midnight Drop Engine  
⚡ RECODE — Midnight Drop Engine  
### High-Concurrency Flash Sale System · Race-Condition Safe Architecture

> Thousands arrive at once. Only a few should succeed — correctly.

---
## 🚨 Problem Statement

Flash-sale systems often fail silently under high concurrency:

| Failure Type          | Impact                           |
|----------------------|----------------------------------|
| Overselling          | More orders than available stock |
| Negative Inventory   | Data inconsistency               |
| Duplicate Purchases  | Same unit sold multiple times    |
| Invalid Transactions | Users charged incorrectly        |

**Root Cause → Race conditions during concurrent writes**

---

## 🎯 System Requirements

The system must guarantee:

| Constraint          | Expected Behavior                         |
|--------------------|-------------------------------------------|
| High Concurrency   | Thousands of simultaneous purchase calls  |
| Limited Inventory  | Strict stock boundaries                   |
| Fair Allocation    | First valid buyers succeed                |
| Data Integrity     | No inconsistent states                    |
| Graceful Failure   | Clean rejection beyond stock              |

---

## 🏗️ System Flow

```

Client → API Layer → Purchase Service → Inventory Gate → Order / Reject

````

---

## 🔐 Core Mechanism — Inventory Gate

A controlled execution boundary that ensures safe state transitions.

### ❌ Naive Implementation (Unsafe)

```js
if (stock > 0) {
    processOrder();
    stock--;
}
````

Issue: Multiple requests read the same stock → overselling

---

## ⚙️ Concurrency Control Strategy

| Component         | Purpose                           |
| ----------------- | --------------------------------- |
| Controlled Access | Prevent parallel inventory writes |
| FIFO Queue        | Maintain request ordering         |
| Atomic Operations | Ensure consistent state updates   |
| Real-Time Sync    | Eliminate stale frontend data     |

---

## 🚀 Features

| Feature           | Description                       |
| ----------------- | --------------------------------- |
| Flash Sale Engine | Timed product drops               |
| Inventory Gate    | Concurrency-safe purchase control |
| WebSocket Updates | Live stock synchronization        |
| Purchase Feed     | Real-time transactions            |
| Traffic Simulator | High-load testing                 |
| Deployment        | Vercel + Render                   |

---

## 🧪 Load Simulation

```js
simulateBuyers(1, 100)
```

---

## 📊 System Behavior Under Load

| Buyers | Stock | Success | Rejected |
| ------ | ----- | ------- | -------- |
| 100    | 20    | 20      | 80       |

---

## 📈 Result Analysis

Success Rate   : ██████████░░░░░░░░░░ 20%
Rejection Rate : ████████████████████ 80%

---

## ✅ System Guarantees

* Inventory never goes negative
* Exact allocation (N orders for N stock)
* No duplicate transactions
* Clean failure handling

---

## 🧰 Tech Stack

React · Node.js · WebSockets · Vercel · Render

---

## 💡 Key Insight

> Systems fail when they produce incorrect results under pressure — not when they crash.

---

## 👩‍💻 Development Context

* Built in 19 hours (Hackathon)
* Focus: Concurrency · Consistency · System Design

---

# ⚡ RECODE

### Correctness > Speed in Distributed Systems

