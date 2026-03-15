# Problem Statement — The Midnight Product Drop

**Thousands arrive. Only a few leave with the prize.**

Modern e-commerce platforms frequently run **flash sales** or **limited product drops** where demand dramatically exceeds supply. When a product goes live, thousands of users may attempt to purchase it at the exact same moment.

While the servers may remain operational, many systems fail in more subtle and damaging ways.

### Incident Scenario

At exactly midnight, a limited-edition product becomes available. Within seconds, thousands of users attempt checkout simultaneously.

The infrastructure does not crash, but the system begins to fail internally:

- Orders appear for products that do not exist
- Inventory values become negative
- Multiple users are allowed to purchase the same item
- Customers pay for products that are already sold out

These issues arise due to **race conditions and lack of concurrency control** in the purchase flow.

---

# The Challenge

Your team has been tasked with designing a commerce system capable of **surviving extreme traffic bursts** during product drops.

The system must ensure that even when thousands of users attempt to buy the same product simultaneously:

- Inventory remains consistent
- Only the correct number of purchases succeed
- All additional buyers are rejected cleanly
- The system remains stable under heavy load

The core requirement is to implement a **controlled purchase mechanism** that prevents overselling and maintains data integrity.

---

# Key System Constraints

| Constraint | Requirement |
|------|------|
Simultaneous Checkout | Thousands of users may attempt to buy the same item at the same moment |
Limited Inventory | Only a very small number of units are available |
Fair Allocation | The earliest valid buyers must receive the product |
Graceful Failure | All additional buyers must be rejected without corrupting data |
System Stability | The platform must remain responsive during traffic spikes |

---

# The Core Puzzle — The Purchase Gate

Somewhere inside the system, a **gate** must exist.

This gate ensures that **no matter how many purchase attempts occur concurrently**, only the allowed number of transactions succeed.

Possible implementations include:

- concurrency locks
- queue based processing
- transaction boundaries
- atomic inventory operations

In this project, the gate is implemented inside the **Inventory Service**, which safely processes purchase requests and ensures inventory never becomes inconsistent.

---

# What Observers Evaluate

The system is evaluated based on how it handles high-traffic purchase attempts.

| Evaluation Criteria | Expected Behavior |
|------|------|
Inventory Consistency | Stock must never become negative |
Concurrent Requests | Simultaneous purchases must be handled safely |
Traffic Burst Handling | System must remain stable during spikes |
Graceful Rejection | Buyers beyond available stock must receive a clean failure response |

---

# Our Solution

RECODE implements a flash-sale system designed to handle high demand scenarios.

The system introduces a **controlled purchase flow** where every purchase request passes through an inventory gate before being approved.

The architecture ensures:

- inventory updates are processed safely
- overselling cannot occur
- real-time UI updates keep users informed
- high demand scenarios can be simulated for testing

---

# Implemented Features

| Feature | Description |
|------|------|
Flash Sale Drop | Products become available at a specific release time |
Inventory Gate | Backend service prevents overselling during concurrent purchases |
Real-Time Stock Updates | WebSocket events update the frontend instantly |
Traffic Simulator | Simulates large numbers of concurrent buyers |
Live Purchase Feed | Displays real-time purchase activity |
Frontend Dashboard | Shows stock changes and sale progress |
Cloud Deployment | Frontend deployed on Vercel, backend on Render |

---

# Traffic Simulation

To demonstrate system behavior during high demand events, the project includes a **traffic simulator** that generates multiple concurrent purchase requests.

Example simulation:

```javascript
simulateBuyers(productId = 1, buyers = 100)
```

This simulates **100 buyers attempting checkout simultaneously**, allowing the system to demonstrate its concurrency handling.

---

# Example Outcome

| Buyers Attempting Purchase | Product Stock | Successful Orders | Rejected Requests |
|------|------|------|------|
100 | 20 | 20 | 80 |

This confirms that:

- the correct number of orders are processed
- inventory remains consistent
- excess buyers are rejected cleanly
