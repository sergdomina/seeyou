import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HeroTitle } from './HowItWorks.styled';
import './verticalTimelineStyle.css';

const style = {
  iconStyle: {
    background: '#C4C4C4',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
  },
  contentStyle: {
    color: '#404040',
    boxShadow: 'none',
    paddingTop: '0',
  },
};
const HowItWorks = () => {
  return (
    <>
      <HeroTitle> How it works</HeroTitle>
      <VerticalTimeline>
        <VerticalTimelineElement
          // className="vertical-timeline-element--work "
          className={'vertical-timeline-element--work'}
          contentStyle={style.contentStyle}
          iconStyle={style.iconStyle}
          icon={<span>1</span>}
          animate={'false'}
        >
          <h3 className="vertical-timeline-element-title">
            Amet minim mollit non
          </h3>
          <p>
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={style.contentStyle}
          iconStyle={style.iconStyle}
          icon={<span>2</span>}
          animate={'false'}
        >
          <h3 className="vertical-timeline-element-title">
            Amet minim mollit non
          </h3>
          <p>
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={style.contentStyle}
          iconStyle={style.iconStyle}
          icon={<span>3</span>}
          animate={'false'}
        >
          <h3 className="vertical-timeline-element-title">
            Amet minim mollit non
          </h3>
          <p>
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={style.contentStyle}
          iconStyle={style.iconStyle}
          icon={<span>4</span>}
          animate={'false'}
        >
          <h3 className="vertical-timeline-element-title">
            Amet minim mollit non
          </h3>
          <p>
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default HowItWorks;
