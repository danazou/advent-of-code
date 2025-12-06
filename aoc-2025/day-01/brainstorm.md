# notes

starts at 50
L means minus, R means plus
when it reaches 0, the number resets to 100
i want to count number of times it reaches or passes 0

example:

- L28: 50 - 28 = 22; does not pass through 0
- L28: 22 - 28 = -6 -> 94, passes through 0 x1
- R200: 94 + 200 = (+6->100, 0+100->100, 0+94->94) 294 -> 94, passes through 0 twice
- L194: 94 - 194 = (94-94->0, 0-100->0) -194 -> 0 passes through 0 twice, lands on 0
- R178: 0 + 178 = (0+100->0, 0+78-> 78) 78 -> passes through 0 once
- R30: 78 + 30 = 108 -> 8 -> passes through 0 once
- L8: 8-8 = 0 -> passes through 0 once
- R100: 0+100 -> passes through 0 once
- R35: 35
- L838: 35-838 = (35-35-> 0, 0-100->0, 0-100->0, 0-100->0...x8...0-3->97)-> -803 -> 97 (9 times (i think))
- R393: 97+393 -> 490 - 4 times
- R10: 0
- L301 - 3

input + rotation >99 or =<0 -> it will pass through 0

- how many times does it pass through?
- if input+rotation is negative, floor((input + rotation) / 100) + 1
- else it's floor((input + rotation) / 100)

all the cases:
~~R -> 100 once~~
~~R -> 100 multiple times~~
~~R -> 100 and end at 100~~
R -> 100 multiple times and end at 100
~~L -> 0 once~~
~~L -> 0 multiple times~~
~~L -> 0 and end at 0~~
~~L -> 0 multiple times and end at 0~~

L28
L28
R200
L194
R178
R30
L8
R100
R35
L838
R393
L301
