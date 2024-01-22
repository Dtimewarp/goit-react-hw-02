import css from './Options.module.css';
import { Button } from '../Button/Button';
import { FaRegFaceSmileWink } from "react-icons/fa6";

import { FaRegFaceGrimace } from "react-icons/fa6";
import { FaRegFaceTired } from "react-icons/fa6";
import { BiReset } from "react-icons/bi";
import { common } from '../../js/common';

const Options = ({ assessments, setAssessments }) => {
  const { bad, good, neutral } = assessments;
  const totalFeedback = good + neutral + bad;

  const onUpdate = option => {
    setAssessments({
      ...assessments,
      [option]: assessments[option] + 1,
    });
  };

  const updateReset = () => {
    setAssessments(common.INITAL_ASSESSMENTS);
  };

  return (
    <ul className={css.list}>
      <li className={css.item} key="good">
        <Button onClick={() => onUpdate('good')}>
        <FaRegFaceSmileWink />
          Good
        </Button>
      </li>
      <li className={css.item} key="neutral">
        <Button onClick={() => onUpdate('neutral')}>
        <FaRegFaceGrimace />
          Neutral
        </Button>
      </li>
      <li className={css.item} key="bad">
        <Button onClick={() => onUpdate('bad')}>
        <FaRegFaceTired />
          Bad
        </Button>
      </li>
      {Boolean(totalFeedback) && (
        <li className={css.item} key="Reset">
          <Button onClick={updateReset}>
          <BiReset />
            Reset
          </Button>
        </li>
      )}
    </ul>
  );
};

export { Options };
