import { flexbox } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HeroTitle } from './HowItWorks.styled';
const iconStyle = {
  background: '#C4C4C4',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
};
const HowItWorks = () => {
  return (
    <>
      <HeroTitle> How it works</HeroTitle>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'1'}
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
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'2'}
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
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'3'}
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
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'4'}
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
          className="vertical-timeline-element--education"
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'5'}
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
          className="vertical-timeline-element--education"
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'6'}
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
          className="vertical-timeline-element--education"
          contentStyle={{
            color: '#404040',
            boxShadow: 'none',
            paddingTop: '0',
          }}
          iconStyle={iconStyle}
          icon={'7'}
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
