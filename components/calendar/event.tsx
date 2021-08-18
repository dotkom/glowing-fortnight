import React, { FC } from 'react';
import { Remarkable } from 'remarkable';
import { HOURS_FORMAT } from '../../common/constants';

const markdown = (text) => {
  const md = new Remarkable();
  return {
    __html: md.render(text),
  };
};

interface Props {
  title: string;
  start_time: string;
  end_time: string;
  content: string;
  index: number;
  eventClickHandler: (id: number) => void;
  highlightIndex: number;
}

const Event: FC<Props> = ({ title, start_time, end_time, content, eventClickHandler, index, highlightIndex }) => {
  const classes = index === highlightIndex ? 'cal-event-content-active' : '';

  return (
    <div className="cal-event" id={`event-${index}`}>
      <div className="cal-event-indicator"></div>

      <a onClick={() => eventClickHandler(index)} href={`#event-${index}`} className="cal-event-header">
        <p className="cal-event-date">{HOURS_FORMAT.format(new Date(start_time))}</p>
        <h3 className="cal-event-title">{title}</h3>
      </a>

      <div className={`cal-event-content ${classes}`} dangerouslySetInnerHTML={markdown(content)} />
      <p className={`cal-event-content ${classes} cal-event-endtime`}>
        Antatt sluttidspunkt: {HOURS_FORMAT.format(new Date(end_time))}
      </p>
    </div>
  );
};

export default Event;
