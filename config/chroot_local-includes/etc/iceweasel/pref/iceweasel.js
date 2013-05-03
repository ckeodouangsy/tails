// This is the Debian specific preferences file for Iceweasel
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/iceweasel/pref directory, override any preference that is
// present in /usr/lib/iceweasel/defaults/preferences directory.
// While your changes will be kept on upgrade if you modify files in
// /etc/iceweasel/pref, please note that they won't be kept if you
// do make your changes in /usr/lib/iceweasel/defaults/preferences.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable browser auto updaters and associated homepage notifications
pref("app.update.auto", false);
pref("app.update.disable_button.showUpdateHistory", false);
pref("app.update.enabled", false);

// Disk activity: Disable Browsing History Storage
pref("browser.privatebrowsing.autostart", true);
pref("browser.cache.disk.enable", false);
pref("browser.cache.offline.enable", false);
pref("permissions.memory_only", true);
pref("network.cookie.lifetimePolicy", 2);
pref("browser.download.manager.retention", 0);

// Disk activity: TBB Directory Isolation
pref("browser.download.useDownloadDir", false);
pref("browser.shell.checkDefaultBrowser", false);

// Misc privacy: Disk
pref("signon.rememberSignons", false);
pref("browser.formfill.enable", false);
pref("signon.autofillForms", false);
pref("browser.sessionstore.privacy_level", 2);

// Misc privacy: Remote
pref("browser.send_pings", false);
pref("geo.enabled", false);
pref("geo.wifi.uri", "");
pref("browser.search.suggest.enabled", false);
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);

// Fingerprinting
pref("browser.display.max_font_attempts", 10);
pref("browser.display.max_font_count", 5);
pref("gfx.downloadable_fonts.fallback_delay", -1);
pref("general.useragent.override", "Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");
pref("dom.enable_performance", false);
pref("plugin.expose_full_path", false);
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.zoom.siteSpecific", false);

// Third party stuff
pref("network.cookie.cookieBehavior", 1);
pref("security.enable_tls_session_tickets", false);
pref("network.http.spdy.enabled", false);
pref("network.http.spdy.enabled.v2", false); // Seems redundant, but just in case
pref("network.http.spdy.enabled.v3", false); // Seems redundant, but just in case

// Proxy and proxy security
pref("network.security.ports.banned", "8118,8123,9050,9051,9061,9062,9063");
pref("network.dns.disablePrefetch", true);
pref("network.protocol-handler.external-default", false);
pref("network.protocol-handler.external.mailto", false);
pref("network.protocol-handler.external.news", false);
pref("network.protocol-handler.external.nntp", false);
pref("network.protocol-handler.external.snews", false)
pref("network.protocol-handler.warn-external.mailto", true);
pref("network.protocol-handler.warn-external.news", true);
pref("network.protocol-handler.warn-external.nntp", true);
pref("network.protocol-handler.warn-external.snews", true);

// Network and performance
pref("network.http.pipelining", true);
pref("network.http.pipelining.aggressive", true);
pref("network.http.pipelining.maxrequests", 12);
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.pipelining", true);
pref("security.ssl.enable_false_start", true);
pref("network.http.keep-alive.timeout", 20);
pref("network.http.connection-retry-timeout", 0);
pref("network.http.max-persistent-connections-per-proxy", 256);
pref("network.http.pipelining.reschedule-timeout", 15000);
pref("network.http.pipelining.read-timeout", 60000);
// Quoting TBB: 'Hacked pref: Now means "Attempt to pipeline at least this many requests together"'
pref("network.http.pipelining.max-optimistic-requests", 3);

// Extension support
pref("xpinstall.whitelist.add", "");
pref("xpinstall.whitelist.add.103", "");

// Unsorted prefs
pref("browser.bookmarks.livemark_refresh_seconds", 31536000);
pref("browser.cache.disk.capacity", 0);
pref("browser.chrome.favicons", false);
pref("browser.chrome.site_icons", false);
pref("browser.chrome.image_icons.max_size", 0);
pref("browser.download.manager.closeWhenDone", true);
pref("browser.history_expire_days", 0);
pref("browser.history_expire_days.mirror", 0);
pref("browser.microsummary.updateGenerators", false);
pref("browser.safebrowsing.remoteLookups", false);
pref("browser.search.update", false);
pref("browser.sessionstore.enabled", false);
pref("dom.event.contextmenu.enabled", false);
pref("dom.storage.enabled", false);
pref("extensions.shownSelectionUI", true);
pref("extensions.update.autoUpdateDefault", false);
pref("extensions.update.enabled", false);
pref("extensions.update.notifyUser", false);
pref("layout.css.report_errors", false);
pref("network.cookie.prefsMigrated", true);
pref("network.protocol-handler.warn-external.file", true);
pref("network.proxy.failover_timeout", 0);
pref("layout.spellcheckDefault", 0);
pref("network.dns.disableIPv6", true);
pref("pref.privacy.disable_button.cookie_exceptions", false);
pref("pref.privacy.disable_button.view_cookies", false);
pref("pref.privacy.disable_button.view_passwords", false);
pref("privacy.item.cookies", true);
pref("privacy.item.offlineApps", true);
pref("privacy.item.passwords", true);
pref("privacy.sanitize.didShutdownSanitize", true);
pref("privacy.sanitize.promptOnSanitize", false);
pref("privacy.sanitize.sanitizeOnShutdown", true);
pref("security.disable_button.openCertManager", false);
pref("security.enable_java", false);
pref("security.enable_ssl2", false);
pref("security.enable_ssl3", true);
pref("security.enable_tls", true);
pref("security.xpconnect.plugin.unrestricted", false);
pref("security.warn_leaving_secure", true);
pref("security.warn_submit_insecure", true);
pref("signon.prefillForms", false);
pref("spellchecker.dictionary", "en_US");
