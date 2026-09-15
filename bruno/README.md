# Bahnhof Watchdog API collection

Open the `bruno` directory as a collection in Bruno and select the `local` environment.

1. Run `Get CSRF token and session`. Its post-response script extracts the `csrf-token` meta tag and `PHPSESSID` cookie into the environment automatically.
2. Update `address` and `postalCode` for the address under test.
3. Run `Get available networks` and copy one returned network's `city` and `value` into `networkCity` and `networkValue`.
4. Run `Get available products`.

The requests use the same endpoints, headers, payload shapes, and token extraction logic as the application client. Do not commit real session or CSRF values.
