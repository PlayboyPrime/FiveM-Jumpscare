RegisterCommand("jumpscare", function(source, args)
	TriggerClientEvent("js_open", args[1])
end, true)
