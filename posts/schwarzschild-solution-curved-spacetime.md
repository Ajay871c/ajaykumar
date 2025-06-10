---
title: "Schwarzschild Solution — The Simplest Curved Spacetime"
description: "Understand the Schwarzschild solution, the first exact solution to Einstein’s field equations, and explore the geometry around non-rotating spherical masses like black holes."
date: "2025-06-10"
author: "Ajay Kumar"
authorImage: "/profile.jpg"
coverImage: "/schwarzschild-black-hole.webp"
category: ["General Relativity"]
keywords:
    [
        "Schwarzschild solution",
        "black hole",
        "Einstein field equations",
        "event horizon",
        "spacetime metric",
    ]
---

# Schwarzschild Solution — The Simplest Curved Spacetime

## 🔭 Overview of the Series

This is the fifth post in our 7-part series on General Relativity. We’ve explored the need for curved spacetime, its geometric interpretation, the structure of spacetime, and geodesics. Now, we introduce the **first exact solution** to Einstein's field equations — the **Schwarzschild solution** — which describes the spacetime outside a spherical, non-rotating mass like a planet or a black hole.

## 📚 Previous Post Summary

In [Post 4](../geodesics-in-curved-spacetime), we studied **geodesics** — the straightest paths in curved spacetime — and how they describe the motion of particles and light under gravity.

---

## 📑 Table of Contents

1. [Overview of the Schwarzschild Solution](#overview-of-the-schwarzschild-solution)
2. [Assumptions: Static, Spherical, Vacuum](#assumptions-static-spherical-vacuum)
3. [Solving the Field Equations (Outline, No Derivation)](#solving-the-field-equations-outline-no-derivation)
4. [The Schwarzschild Metric](#the-schwarzschild-metric)
5. [Event Horizon and the Schwarzschild Radius](#event-horizon-and-the-schwarzschild-radius)
6. [Time Dilation Near a Black Hole](#time-dilation-near-a-black-hole)
7. [Orbital Motion and Precession](#orbital-motion-and-precession)
8. [Implications and Limitations](#implications-and-limitations)
9. [Conclusion & Transition to Next Post](#conclusion--transition-to-next-post)

---

## 1. Overview of the Schwarzschild Solution

The **Schwarzschild solution**, found by Karl Schwarzschild in 1916, is the **first exact solution** to Einstein’s field equations. It models the spacetime outside a spherical, non-rotating, uncharged mass in vacuum.

Its significance lies in its ability to describe everything from planetary orbits to black holes, using just a few assumptions.

---

## 2. Assumptions: Static, Spherical, Vacuum

To derive the Schwarzschild solution, we assume:

-   **Static**: the spacetime doesn’t change over time
-   **Spherical symmetry**: the mass distribution is spherically symmetric
-   **Vacuum**: we are outside the mass, so energy-momentum tensor $$T_{\mu\nu} = 0$$

Under these conditions, Einstein's field equations reduce significantly.

---

## 3. Solving the Field Equations (Outline, No Derivation)

Einstein’s field equations in vacuum:

$$
R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu} = 0 \quad \Rightarrow \quad R_{\mu\nu} = 0
$$

Assuming spherical symmetry, we postulate a general metric:

$$
ds^2 = -A(r)\,dt^2 + B(r)\,dr^2 + r^2 d\Omega^2
$$

Solving the resulting differential equations gives:

-   \(A(r) = 1 - \frac{2GM}{r}\)
-   \(B(r) = \left(1 - \frac{2GM}{r}\right)^{-1}\)

---

## 4. The Schwarzschild Metric

The final form of the **Schwarzschild metric**:

$$
ds^2 = -\left(1 - \frac{2GM}{r}\right) dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1} dr^2 + r^2 \left( d\theta^2 + \sin^2\theta\, d\phi^2 \right)
$$

Where:

-   \(G\): gravitational constant
-   \(M\): mass of the central object
-   \(r\): radial coordinate
-   \((\theta, \phi)\): angular coordinates

This describes how time and space behave near a spherically symmetric mass.

---

## 5. Event Horizon and the Schwarzschild Radius

A key feature of this solution is the **Schwarzschild radius**:

$$
r_s = \frac{2GM}{c^2}
$$

At \(r = r_s\), the metric becomes singular — the coefficient of \(dt^2\) goes to zero, and of \(dr^2\) becomes infinite.

This defines the **event horizon** of a black hole:

-   Beyond this radius, nothing (not even light) can escape.
-   Inside, time and space coordinates effectively swap roles.

---

## 6. Time Dilation Near a Black Hole

As one approaches the Schwarzschild radius, **gravitational time dilation** becomes extreme.

A clock at radius \(r\) ticks slower by:

$$
\Delta t = \frac{\Delta \tau}{\sqrt{1 - \frac{2GM}{r}}}
$$

Where:

-   \(\Delta \tau\) is proper time (experienced by the falling observer)
-   \(\Delta t\) is coordinate time (seen by a distant observer)

At the horizon (\(r = r_s\)), time appears to stop for a distant observer.

---

## 7. Orbital Motion and Precession

The Schwarzschild geometry also modifies how objects move in orbit:

-   Stable circular orbits exist only for \(r > 3r_s\)
-   There is a **last stable orbit** at \(r = 6GM\)
-   Precession of planetary orbits, like Mercury’s, is partially explained by this

This prediction was one of the early **experimental confirmations** of General Relativity.

---

## 8. Implications and Limitations

**Implications**:

-   Describes spacetime around non-rotating black holes
-   Predicts event horizons and gravitational time dilation
-   Explains relativistic corrections to Newtonian gravity

**Limitations**:

-   Assumes no charge or rotation
-   For rotating objects → use the **Kerr metric**
-   For charged objects → use the **Reissner–Nordström metric**

---

## 9. Conclusion & Transition to Next Post

The **Schwarzschild solution** offers the simplest curved spacetime — yet reveals deep truths like black holes, time dilation, and spacetime singularities. It's a cornerstone of theoretical physics.

In the next post, we’ll explore how this geometry **bends light**, causes **gravitational lensing**, and defines **photon spheres** — essential for understanding black hole observations.

---

**📣share, and Follow** to follow the rest of this relativity series!
