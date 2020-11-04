/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { LocaleContext } from '../../lib/locale_context'
import { NewTabLink } from '../new_tab_link'
import { BatIcon } from '../icons/bat_icon'
import { TermsOfService } from './terms_of_service'
import { MainButton } from './main_button'

import * as style from './settings_opt_in_form.style'

interface Props {
  onEnable: () => void
  onTakeTour: () => void
}

export function SettingsOptInForm (props: Props) {
  const { getString } = React.useContext(LocaleContext)
  return (
    <style.root>
      <style.heading><BatIcon />Brave Rewards</style.heading>
      <style.subHeading>
        Earn Tokens and Give Back
      </style.subHeading>
      <style.text>
        Earn tokens by viewing Brave Private Ads and support content creators
        automatically.&nbsp;
        <a href='javascript:void 0' onClick={props.onTakeTour}>
          Take a quick tour
        </a> or&nbsp;
        <NewTabLink href='https://basicattentiontoken.org'>
          learn more
        </NewTabLink> for details.
      </style.text>
      <style.enable>
        <MainButton onClick={props.onEnable}>
          {getString('onboardingStartUsingRewards')}
        </MainButton>
      </style.enable>
      <style.footer>
        <TermsOfService />
      </style.footer>
    </style.root>
  )
}
