(module accounts GOV

  (defcap GOV () true)
  (defschema account-schema
      keyset:guard
      avatar:string
      )

  (deftable accounts:{account-schema})

  (defun create-account
      ( account-id:string
        keyset:guard
        avatar:string
      )
    (insert accounts account-id
            { 'keyset: keyset
            , 'avatar: avatar
            }))

  (defcap SESSION
      ( account-id:string )
    (with-read accounts account-id
      { 'keyset:=keyset }
      (enforce-session keyset)))

  (defcap UPDATE_ACCOUNT
      ( account-id:string )
    (with-read accounts account-id
      { 'keyset:=keyset }
      (enforce-guard keyset)))

  (defun update-avatar
      ( account-id:string
        avatar:string )
    (with-capability (UPDATE_ACCOUNT account-id)
        (update accounts account-id
                { 'avatar: avatar })))

)

(create-table accounts)
