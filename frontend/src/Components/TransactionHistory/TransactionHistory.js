import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

/* import DoughnutChart from "../Chart/DoughnutChart"; */

function TransactionHistory() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  /* console.log(history); */

  return (
    <div style={{ padding: "2rem" }}>
      {/* <DoughnutChart /> */}
      <HistoryStyled>
        <h2>Transaction History</h2>
        {history.map((item) => {
          const { _id, title, amount, type, date } = item;
          return (
            <div key={_id} className="history-item">
              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                {title}
              </p>

              <p
                style={{
                  color: type === "expense" ? "red" : "var(--color-green)",
                }}
              >
                INR{"  "}
                {type === "expense"
                  ? `-${amount <= 0 ? 0 : amount}`
                  : `+${amount <= 0 ? 0 : amount}`}
              </p>
              <p>{dateFormat(date)}</p>
            </div>
          );
        })}
      </HistoryStyled>
    </div>
  );
}
const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default TransactionHistory;
