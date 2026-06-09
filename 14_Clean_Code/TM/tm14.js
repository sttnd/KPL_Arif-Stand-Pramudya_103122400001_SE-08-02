// Kode A
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user)
      }
    }
  }
  return null
}

// Kode B
function processUser(user) {
  if (!isValidCandidate(user)) return null;
  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}