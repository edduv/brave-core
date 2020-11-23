/* Copyright (c) 2020 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#ifndef BRAVE_COMPONENTS_CONTENT_SETTINGS_CORE_BROWSER_BRAVE_CONTENT_SETTINGS_UTILS_H_
#define BRAVE_COMPONENTS_CONTENT_SETTINGS_CORE_BROWSER_BRAVE_CONTENT_SETTINGS_UTILS_H_

#include <string>
#include <vector>

#include "components/content_settings/core/common/content_settings.h"
#include "components/content_settings/core/common/content_settings_types.h"

namespace content_settings {

const std::vector<ContentSettingsType>& GetShieldsContentSettingsTypes();

bool IsShieldsContentSettingsType(const ContentSettingsType& content_type);

base::Optional<ContentSettingsPattern> ConvertPatternToWildcardSchemeAndPort(
    const ContentSettingsPattern& pattern);

}  // namespace content_settings

#endif  // BRAVE_COMPONENTS_CONTENT_SETTINGS_CORE_BROWSER_BRAVE_CONTENT_SETTINGS_UTILS_H_
