/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { CaretIcon } from './icons/caret_icon'

import * as style from './tour_navigation.style'

interface Props {
  stepCount: number
  currentStep: number
  layout?: 'narrow' | 'wide'
  onSelectStep: (step: number) => void
  onSkip: () => void
  onDone: () => void
}

export function TourNavigation (props: Props) {
  if (props.currentStep < 0 ||
      props.currentStep >= props.stepCount ||
      props.stepCount <= 0) {
    return null
  }

  function stepCallback (step: number) {
    return () => {
      if (step !== props.currentStep &&
          step >= 0 &&
          step < props.stepCount) {
        props.onSelectStep(step)
      }
    }
  }

  const isFirst = props.currentStep === 0
  const isLast = props.currentStep === props.stepCount - 1

  if (isFirst) {
    const skipClick = () => props.onSkip()
    return (
      <style.root className={`nav-start nav-${props.layout || 'narrow'}`}>
        <button className='nav-skip' onClick={skipClick}>
          Skip
        </button>
        <button className='nav-forward' onClick={stepCallback(1)}>
          Let’s take a quick tour <CaretIcon direction='right' />
        </button>
      </style.root>
    )
  }

  const onBack = stepCallback(props.currentStep - 1)

  const onForward = isLast
    ? () => props.onDone()
    : stepCallback(props.currentStep + 1)

  const forwardContent = isLast
    ? <>Done</>
    : <>Continue<CaretIcon direction='right' /></>

  return (
    <style.root>
      <button className='nav-back' onClick={onBack}>
        <CaretIcon direction='left' />Go Back
      </button>
      <button className='nav-forward' onClick={onForward}>
        {forwardContent}
      </button>
    </style.root>
  )
}
