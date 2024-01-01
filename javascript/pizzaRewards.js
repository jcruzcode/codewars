// Free Pizza (6 kyu)
function pizzaRewards(customers, minOrders, minPrice) {
  const winners = [];
  let accepted;

  for (let name in customers) {
    accepted = customers[name].filter((cost) => cost >= minPrice);
    if (accepted.length >= minOrders) winners.push(name);
  }

  return winners;
}
