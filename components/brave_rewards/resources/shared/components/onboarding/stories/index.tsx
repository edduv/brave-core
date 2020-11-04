/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { LocaleContext } from '../../../lib/locale_context'
import { WithThemeVariables } from '../../with_theme_variables'

import { RewardsTourModal } from '../rewards_tour_modal'
import { RewardsOptInModal } from '../rewards_opt_in_modal'
import { TipOptInForm } from '../tip_opt_in_form'
import { SettingsOptInForm } from '../settings_opt_in_form'

import { localeStrings } from './locale_strings'

const localeContext = {
  getString (key: string) {
    return localeStrings[key] || 'MISSING'
  }
}

function actionLogger (name: string) {
  return (...args: any[]) => {
    console.log(name, ...args)
  }
}

interface StoryWrapperProps {
  style?: React.CSSProperties
  children: React.ReactNode
}

function StoryWrapper (props: StoryWrapperProps) {
  return (
    <LocaleContext.Provider value={localeContext}>
      <WithThemeVariables>
        <div style={props.style || {}}>
          {props.children}
        </div>
      </WithThemeVariables>
    </LocaleContext.Provider>
  )
}

storiesOf('Rewards/Onboarding', module)
  .add('Tour Modal', () => {
    return (
      <StoryWrapper>
          <RewardsTourModal
            onClose={actionLogger('onClose')}
            onDone={actionLogger('onDone')}
            rewardsEnabled={true}
          />
      </StoryWrapper>
    )
  })
  .add('Tour Modal (Wide)', () => {
    return (
      <StoryWrapper>
          <RewardsTourModal
            layout='wide'
            onClose={actionLogger('onClose')}
            onDone={actionLogger('onDone')}
            rewardsEnabled={true}
          />
      </StoryWrapper>
    )
  })
  .add('Opt-in Modal', () => {
    return (
      <StoryWrapper>
        <RewardsOptInModal
          onEnable={actionLogger('onEnable')}
          onClose={actionLogger('onClose')}
          onTakeTour={actionLogger('onTakeTour')}
        />
      </StoryWrapper>
    )
  })
  .add('Tip Opt-in', () => {
    return (
      <StoryWrapper style={{ width: '363px', height: '404px' }}>
        <TipOptInForm
          onEnable={actionLogger('onEnable')}
          onDismiss={actionLogger('onDismiss')}
          onTakeTour={actionLogger('onTakeTour')}
        />
      </StoryWrapper>
    )
  })
  .add('Settings Opt-in', () => {
    return (
      <StoryWrapper style={{ width: '619px' }}>
        <SettingsOptInForm
          onEnable={actionLogger('onEnable')}
          onTakeTour={actionLogger('onTakeTour')}
        />
      </StoryWrapper>
    )
  })
