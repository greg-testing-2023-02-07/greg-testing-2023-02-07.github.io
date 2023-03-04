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

  (defun list-accounts ()
    (keys accounts))

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

  (defun like-post
    ( account-id:string
      post-id:string )
    (with-capability (SESSION account-id)
      (format "{} liked post {}" [account-id, post-id])))

  (defun get-account
    ( account-id:string )
    (read accounts account-id))

  (defschema pictures-schema
    picture-id:string
    account-id:string
    src:string
    likes:[string]
    )

  (deftable pictures:{pictures-schema})

  (defun create-picture
    (account-id:string id:string src:string)
    (insert pictures id
      { 'picture-id: id
      , 'account-id: account-id
      , 'src: src
      , 'likes: []
      }))

   (defun get-pictures
     (account-id:string)
     (select pictures (where 'account-id (= account-id))))

   (defun like-picture (account-id:string picture-id:string)
     (with-read pictures picture-id
       { "likes" := old-likes,
         "account-id" := account-id,
         "picture-id" := picture-id,
         "src" := src
       }
       (enforce (not (contains account-id old-likes)) "Already liked")
       (update pictures picture-id
         { "likes": (+ [account-id] old-likes),
           "account-id": account-id,
           "picture-id": picture-id,
           "src": src
         })
     )
   )

)

(create-table accounts)
(create-table pictures)
(accounts.get-pictures "greg")
