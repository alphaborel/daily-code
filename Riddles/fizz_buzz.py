# Classic FizzBuzz. Number/3 print Fizz, Number/5 print Buzz, 3 & 5 print FizzBuzz.
# Refactored Slightly. elif on line 8 improves performance over just if.

def fizzbuzz(num, StopNum):
  while num <= StopNum:
    if num % 3 == 0:
      print('Fizz', num)
    elif num % 5 == 0:
      print('Buzz', num)
    if num % 3 == 0 and num % 5 == 0:
      print('FizzBuzz', num)
    num = num + 1
 
fizzbuzz(1, 100)