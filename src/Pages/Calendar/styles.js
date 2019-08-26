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

export const HolidayTagContainer = styled.div`
  height: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

export const HolidayDetail = styled.div`
  position: relative;
  height: 75px;
  background: rgba(164, 164, 164, 1);
  margin-top: 5px;
  width: 420px;
  border-radius: 4px;
`;

export const WeekRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 420px;
`;

export const HolidayName = styled.label`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
  padding: 2px 16px;
  vertical-align: top;
  color: #eee;
`;

export const ArrowHoliday = styled.div`
  position: absolute;
  top: -5px;
  left: 387px;
  margin-left: -2px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent rgba(164, 164, 164, 1) transparent;
  transition: all 0.7s ease;
`;

export const HolidayInfoBox = styled.div`
  height: 75px;
  padding: 7px 0;
  overflow-y: auto;
  overflow-x: hidden;
`;
