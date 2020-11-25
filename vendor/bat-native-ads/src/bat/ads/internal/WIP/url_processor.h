/* Copyright (c) 2020 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BAT_ADS_INTERNAL_AD_TARGETING_PROCESSORS_URL_PROCESSOR_H_
#define BAT_ADS_INTERNAL_AD_TARGETING_PROCESSORS_URL_PROCESSOR_H_

#include "bat/ads/internal/ad_targeting/processors/processor.h"

#include "base/gurl.h"

namespace ads {
namespace ad_targeting {
namespace processor {

class Url : public Processor<GURL> {
 public:
  Url();

  ~Url() override;

  void LoadUserModelForLocale(
      const std::string& locale);

  void LoadUserModelForId(
      const std::string& id);

  bool Process(
      const GURL& url) override;
};

}  // namespace processor
}  // namespace ad_targeting
}  // namespace ads

#endif  // BAT_ADS_INTERNAL_AD_TARGETING_PROCESSORS_URL_PROCESSOR_H_
