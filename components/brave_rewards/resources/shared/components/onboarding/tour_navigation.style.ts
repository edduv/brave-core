/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'

export const root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.nav-narrow.nav-start {
    flex-direction: column;

    .nav-skip {
      margin-top: 16px;
      order: 2;
    }
  }

  &.nav-start .nav-forward {
    padding: 10px 26px;
  }

  button.nav-forward {
    color: var(--brave-palette-white);
    background: var(--brave-color-brandBat);
    border: none;
    padding: 5px 20px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;

    .icon {
      height: 12px;
      vertical-align: middle;
      margin: 0 -6px 2px 2px;
    }

    &:active {
      background: var(--brave-color-brandBatActive);
    }
  }

  button.nav-skip {
    margin-top;
    color: var(--brave-palette-neutral600);
    background: none;
    border: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    cursor: pointer;
    outline: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
  }

  button.nav-back {
    border: none;
    background: none;
    margin: 0;
    padding: 5px;
    cursor: pointer;
    color: var(--brave-color-brandBat);

    .icon {
      height: 12px;
      vertical-align: middle;
      margin: 0 2px 2px 0;
    }
  }
`
