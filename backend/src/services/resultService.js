const db = require('../config/db');

exports.processResults = async (drawId) => {
  const [results] = await db.execute(
    'select * from draw_results where draw_id = ?',
    [drawId]
  );

  const [bets] = await db.execute(
    'select * from bets where status = "pendente"'
  );

  for (const bet of bets) {
    let ganhou = false;
    let premio = 0;

    for (const r of results) {
      if (bet.type === 'milhar' && bet.number == r.thousand_number) {
        ganhou = true;
        premio = bet.amount * 4000;
      }
    }

    if (ganhou) {
      await db.execute(
        'update wallets set balance = balance + ? where user_id = ?',
        [premio, bet.user_id]
      );

      await db.execute(
        'update bets set status = "ganhou" where id = ?',
        [bet.id]
      );
    } else {
      await db.execute(
        'update bets set status = "perdeu" where id = ?',
        [bet.id]
      );
    }
  }
};