const numbers = new Set<number>();

const t = numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.delete(30);
console.log(numbers);

numbers.size;
