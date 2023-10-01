import React from 'react';
import styles from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label} </span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
