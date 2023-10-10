'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';
import styles from  "./swipezor.module.css";
import {RxDoubleArrowRight } from 'react-icons/rx'

interface SwipezorProps {
  mainText: any;
  overlayText: any;
  onSwipeDone: Function;
  reset?: number;
  classList?: string;
  overlayClassList?: string;
  caretClassList?: string;
  delta?: number;
  minSwipeWidth?: number;
  minSwipeVelocity?: number;
  caret?: any;
}

function findLeft(element: { getBoundingClientRect: () => any; } | undefined) {
  if (element) {
    var rec = element.getBoundingClientRect();
  }
  return rec.left + window.scrollX;
}

function SwipeButton({
  mainText,
  overlayText,
  onSwipeDone,
  reset,
  classList = '',
  overlayClassList = '',
  caretClassList = '',
  delta = 10,
  minSwipeWidth = 0.6,
  minSwipeVelocity = 0.6,
  caret = null
}: SwipezorProps) {
  const [overlayWidth, setOverlayWidth] = useState(50);
  const [swipeComplete, setSwipeComplete] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>();

  useEffect(() => {
    if (reset) {
      setSwipeComplete(false);
      setOverlayWidth(40);
    }
  }, [reset]);

  const handlers = useSwipeable({
    onSwipedRight: (data:any) => {
      if (swipeComplete)
        return;

      const butWidth = buttonRef.current ? buttonRef.current.offsetWidth : 50;

      if (data.velocity && data.velocity > minSwipeVelocity) {
        setOverlayWidth(butWidth);
        setSwipeComplete(true);
        setTimeout(() => onSwipeDone(), 100);
      }
      else {
        const offsetLeft = findLeft(buttonRef.current);
        const startPos = Math.abs(data.initial[0] - offsetLeft);
        if (startPos <= 100 &&
          (data.event instanceof TouchEvent ?  data.event.changedTouches[0].clientX - offsetLeft : data.event.offsetX) > minSwipeWidth * butWidth
        ) {
          setOverlayWidth(butWidth);
          setSwipeComplete(true);
          setTimeout(() => onSwipeDone(), 100);
        }
        else
          setOverlayWidth(40);
      }
    },
    onSwiping: (data:any) => {
      if (swipeComplete)
        return;
      const offsetLeft = findLeft(buttonRef.current);
      const startPos = Math.abs(data.initial[0] - offsetLeft);
      if (startPos <= 100) {
        if (data.event && data.event instanceof TouchEvent )
          setOverlayWidth(data.event.touches[0].clientX - offsetLeft);
        else
          setOverlayWidth(data.event.offsetX);
      }

    },
    delta,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true
  });

  return (
    <div className={`${styles.swipezor_but} ${classList}`} {...handlers} ref={(t) => {
      handlers.ref(t);
      buttonRef.current = t as unknown as HTMLButtonElement;
    }}>
      <div className={`${styles.swipezor_overlay} ${overlayClassList}`} style={{ width: overlayWidth }}>
        <div className={styles.swipezor_overlay_wrapper}>
          <div className={`${styles.swipezor_caret_wrapper} ${caretClassList}`}>
            {caret ? caret : <RxDoubleArrowRight style={{ maxWidth: '100%' }} />}
          </div>
          <div className={styles.swipezor_overlay_txt}>
            {overlayText}
          </div>
        </div>
      </div>
      {mainText}
    </div>
  )
}

export default SwipeButton;
