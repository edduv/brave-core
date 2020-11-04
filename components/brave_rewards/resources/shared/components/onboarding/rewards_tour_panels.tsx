/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

type TourPanelFunction = () => ({
  id: string
  heading: React.ReactNode
  text: React.ReactNode
})

function panelWelcome () {
  return {
    id: 'welcome',
    heading: 'Welcome to Brave Rewards!',
    text: (
      <>
        Brave private ads rewards you with tokens to support content creators
        unlike traditional ads, all while keeping your personal information
        private.
      </>
    )
  }
}

function panelAds () {
  return {
    id: 'ads',
    heading: 'Where do ads show up?',
    text: (
      <>
        Brave private ads will appear as a normal notification. You control how
        often you see these ads in settings.
      </>
    )
  }
}

function panelSchedule () {
  return {
    id: 'schedule',
    heading: 'When do you receive rewards',
    text: (
      <>
        Your earned tokens from Brave ads throughout the current month will
        arrive on the 5th of the next month.
      </>
    )
  }
}

function panelAC () {
  return {
    id: 'ac',
    heading: 'Support creators on autopilot',
    text: (
      <>
        Creators are automatically rewarded with the earned tokens based on your
        browsing/engagement levels that we measure as ‘Attention’.
      </>
    )
  }
}

function panelTipping () {
  return {
    id: 'tipping',
    heading: 'Say thank you with tips',
    text: (
      <>
        Tipping is a way to personally encourage and support content or creators
        that you love. Get tippin!
      </>
    )
  }
}

function panelRedeem () {
  return {
    id: 'redeem',
    heading: 'What can you do with tokens?',
    text: (
      <>
        Tokens can be used beyond supporting creators. You can buy digital goods
        and giftcards with a cashback bonus.
      </>
    )
  }
}

function panelComplete () {
  return {
    id: 'complete',
    heading: (
      <>
        WOOOOHOOOOO!<br />You’re done.
      </>
    ),
    text: (
      <>
        By using Brave Rewards, you are protecting your privacy and helping make
        the web a better place for everyone. And that’s awesome!
      </>
    )
  }
}

export function getTourPanels (): TourPanelFunction[] {
  return [
    panelWelcome,
    panelAds,
    panelSchedule,
    panelAC,
    panelTipping,
    panelRedeem,
    panelComplete
  ]
}
