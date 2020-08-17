/* Copyright (c) 2020 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "third_party/blink/renderer/core/origin_trials/origin_trials.h"

namespace blink {
namespace origin_trials {
bool IsTrialValid_ChromiumImpl(const StringView& trial_name);
}  // namespace origin_trials
}  // namespace blink

#define IsTrialValid IsTrialValid_ChromiumImpl
#include "../gen/third_party/blink/renderer/core/origin_trials/origin_trials.cc"
#undef IsTrialValid

namespace blink {

bool origin_trials::IsTrialValid(const StringView& trial_name) {
  // When updating this list also update
  //  * origin_trial_context.cc override and
  static const char* const kBraveDisabledTrialNames[] = {
      // [cr88] "DigitalGoods",
      "NativeFileSystem2",
      "SignedExchangeSubresourcePrefetch",
      "SubresourceWebBundles",
  };

  if (base::Contains(kBraveDisabledTrialNames, trial_name)) {
    // Check if this is still a valid trial in Chromium. If not, we can remove
    // our override for this trial.
    DCHECK(origin_trials::IsTrialValid_ChromiumImpl(trial_name));
    return false;
  }

  return origin_trials::IsTrialValid_ChromiumImpl(trial_name);
}

}  // namespace blink
