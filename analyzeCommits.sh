jq -r 'to_entries[] | [ .key, .value ] | @csv' $2