import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 420px;
`;

export const SelectMonth = styled.header`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100%;
  align-items: center;
  background-color: #424242;
  position: relative;
`;

export const Arrow = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
  top: 50%;
  margin-top: -7.5px;
  cursor: pointer;
`;

export const ArrowRight = styled(Arrow)`
  border-width: 7.5px 0 7.5px 10px;
  border-color: transparent transparent transparent #a09fa0;
  right: 20px;
`;

export const ArrowLeft = styled(Arrow)`
  border-width: 7.5px 10px 7.5px 0;
  border-color: transparent #a09fa0 transparent transparent;
  left: 20px;
`;

export const MonthTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 50px;
  font-weight: 100;
  letter-spacing: 1px;
  color: #fff;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 420px;
`;
export const DayWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 78px;
  padding: 10px;
  color: ${props =>
    props.isActiveMonth
      ? props.today
        ? "#9ccaeb"
        : "#fff"
      : "rgba(255, 255, 255, .3)"};
  font-size: 24px;
  letter-spacing: 1.5px;
`;

export const IsHoliday = styled.span`
  width: 5px;
  height: 5px;
  line-height: 5px;
  background-color: #f7a700;
`;

export const DayName = styled.label`
  display: flex;
  font-size: 9px;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.7px;
`;

export const HolidayEvent = styled.div`
  height: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 60px);
  grid-auto-rows: 78px;
`;
