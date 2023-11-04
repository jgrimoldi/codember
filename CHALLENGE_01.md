# Challenge 01

A spy is sending encrypted messages.

Your mission is to create a program that helps us find patterns...

The messages are words separated by spaces like this:
gato perro perro coche Gato peRRo sol

We need the program to return the number of times each word appears in the message, regardless of whether it's in uppercase or lowercase.

The result will be a text string with the word and the number of times it appears in the message, in this format:
gato2perro3coche1sol1

**Examples:**

llaveS casa CASA casa llaves ->  llaves2casa3
taza ta za taza -> taza2ta1za1
casas casa casasas -> casas1casa1casasas1

**How to Solve It:**

1. Solve the message found in this file:
   [Message File](https://github.com/jgrimoldi/codember/blob/main/data/message_01.txt)

2. Submit your solution using the following command in the terminal, for example:

```bash

submit perro3gato3coche1sol1

```
