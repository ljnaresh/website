---
title: Introduction to SOLID Principles
summary: Peek into the five design principles of OOP
date: 2023-01-21
hero_image: ./tools.jpg
hero_image_alt_text: computer
hero_image_shutterbug: Joanna Kosinska
hero_image_shutterbug_link: 'https://unsplash.com/it/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
hero_image_source: Unsplash
hero_image_source_link: 'https://unsplash.com/wallpapers/design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
tags: [solid-principles, design-patterns, object-oriented-programming]
draft: false
---

# Introduction to SOLID Principles

SOLID is a mnemonic acronym that stands for five design principles of object-oriented programming. These principles were first introduced by Robert Cecil Martin (Uncle Bob) in his paper "Design principles and design patterns". According to Robert Cecil Martin, these
principles are not rules, laws or perfect truths. They are commonsense solutions to common problems.

## Single Responsibility Principle (SRP)

The Single Responsibility Principle (SRP) states that each software module should have one and only one reason to change. In other words, a class or a module should have only one responsibility. The main idea of this principle is to increase the cohesion between things that change for the same reasons, and we want to decrease the coupling between those things that change for different reasons.

## Open Closed Principle (OCP)

The Open Closed Principle states that a module should be open for extension but closed for modification. In other words, a class or a module should be extendable with requiring any modification. This principle encourages the use of polymorphism and interfaces, allowing us to add new functionality without modifying the existing code.

## Liskov Substitution Principle (LSP)

The Liskov Substitution Principle states that Subclasses should be substitutable for their base class. This principle encourages the use of inheritance and polymorphism to maintain the integrity of the program.

## Interface Segregation Principle (ISP)

The Interface Segregation Principle states that many client specific interfaces are better than one general purpose interface. In other words, the interface should only contain methods that are required by the client that is implementing the interface. This principle encourages the use of many small and specific interfaces.

## Dependency Inversion Principle (DIP)

The Dependency Inversion Principle states that Depend upon Abstractions, Do not depend upon concretions. In other words, every dependency should target an interface or an abstract class and should not target a concrete class.

## References

- [Design principles and design patterns](http://staff.cs.utu.fi/staff/jouni.smed/doos_06/material/DesignPrinciplesAndPatterns.pdf)
- [Getting a SOLID start (The Clean Coder Blog)](https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start)
- [SOLID (Wikipedia)](https://en.wikipedia.org/wiki/SOLID)
- [The Single Responsibility Principle (The Clean Coder Blog)](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
