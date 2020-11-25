/* Copyright (c) 2020 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BAT_ADS_INTERNAL_AD_TARGETING_PROCESSORS_TEXT_PROCESSOR_H_
#define BAT_ADS_INTERNAL_AD_TARGETING_PROCESSORS_TEXT_PROCESSOR_H_

#include "bat/ads/internal/ad_targeting/processors/processor.h"

#include <string>

namespace ads {
namespace ad_targeting {
namespace processor {

class Text : public Processor<std::string> {
 public:
  Text(
      const std::string& user_model);

  ~Text() override;

  bool Process(
      const std::string& text) override;

 private:
  std::string user_model_;
};

}  // namespace processor
}  // namespace ad_targeting
}  // namespace ads

#endif  // BAT_ADS_INTERNAL_AD_TARGETING_PROCESSORS_TEXT_PROCESSOR_H_
