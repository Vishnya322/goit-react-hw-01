import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No transactions to display</p>;
  }
  return (
    <table className={css.transactionTable}>
      <thead className={css.tableTop}>
        <tr>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.transactionRow}>{item.type}</td>
            <td className={css.transactionRow}>{item.amount}</td>
            <td className={css.transactionRow}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
