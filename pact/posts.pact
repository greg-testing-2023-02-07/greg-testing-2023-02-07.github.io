(module posts GOV

  (defcap GOV () true)

  (defschema post-schema
    owner:string
    content:string
    )
  (deftable posts:{post-schema})

  (defcap SESSION
      ( account-id:string )
    (with-read accounts account-id
      { 'keyset:=keyset }
      (enforce-session keyset)))

  (defun like-post
      ( account-id:string
        post-id:string
      )
    (with-capability (SESSION account-id)
        (format "{} liked post {}" [account-id,post-id])))

)
(enforce false "rolling back")
(create-table posts)
