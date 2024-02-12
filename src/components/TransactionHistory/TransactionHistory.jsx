import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.tableTop}>
        <tr>
          <th className={css.nameColumn}>Type</th>
          <th className={css.nameColumn}>Amount</th>
          <th className={css.nameColumn}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.taRow}>{item.type}</td>
            <td className={css.taRow}>{item.amount}</td>
            <td className={css.taRow}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
