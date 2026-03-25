# ⚡ RECODE: Midnight Drop Engine  
### 🧠 High-Concurrency Flash Sale System | Race-Condition Safe Architecture

> 🕛 Thousands arrive at midnight. Only a few should succeed — correctly.

---

## 🚨 The Problem

Flash sales don’t fail by crashing — they fail silently.

- ❌ Overselling inventory  
- ❌ Negative stock values  
- ❌ Duplicate successful purchases  
- ❌ Users paying for unavailable products  

💥 **Root Cause:** Race conditions under concurrent access

---

## 🎯 Objective

Design a system that survives extreme traffic spikes while ensuring:

- 🟢 Strict inventory consistency  
- 🟢 Fair allocation (first valid buyers win)  
- 🟢 Zero overselling  
- 🟢 Graceful rejection of excess users  
- 🟢 System stability under load  

---

User → API → Purchase Service → Inventory Gate → Order / Reject


---

## 🔐 The Core — Inventory Gate

Every purchase request passes through a controlled execution layer.

### ❌ Naive Approach

```js
if (stock > 0) {
    processOrder();
    stock--;
}
---
⚠️ Multiple requests read same stock → overselling


⚙️ Solution
🧵 Controlled access (no parallel writes)
📥 FIFO request handling
🧮 Atomic inventory updates
🔄 Real-time updates via WebSockets
🚀 Features
⚡ Flash sale drop engine
🔐 Concurrency-safe inventory gate
🔄 Live stock updates
📊 Real-time purchase feed
🧪 Traffic simulator
🌐 Deployed on Vercel + Render
🧪 Simulation
simulateBuyers(1, 100)
📊 Result
Buyers	Stock	Success	Rejected
100	20	20	80
✅ Guarantees
No negative inventory
Exact allocation
No duplicate orders
Clean failure handling
🧰 Tech Stack

React • Node.js • WebSockets • Vercel • Render

💡 Insight

Systems don’t fail when they crash.
They fail when they return wrong results under load.

👩‍💻 Built In

19-hour hackathon • Focus: Concurrency & System Design

## 🏗️ System Flow
